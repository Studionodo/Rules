import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { APP_NAME, DETECT_INTERVAL_MS } from '../config.js';
import { FILM_PROFILES, DEFAULT_PROFILE } from '../camera/filmProfiles.js';
import { FilmRenderer, captureFrame } from '../camera/filmRenderer.js';
import { createDetector, mapDetections } from '../camera/subjectDetector.js';
import { analyze } from '../camera/composition.js';
import { SubjectTracker } from '../camera/subjectTracker.js';
import { IS_ANDROID, IS_IOS, downloadUrl } from '../camera/platform.js';
import { useLevel } from '../camera/useLevel.js';
import { useLang } from '../i18n/LangContext.jsx';

const TEAL = '#3CC2B5';
const PAPER = '#F5F2ED';

// Restituisce la chiave del messaggio, tradotta al momento della visualizzazione.
function cameraErrorKey(err) {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) return 'err.noApi';
  switch (err && err.name) {
    case 'NotAllowedError': return 'err.denied';
    case 'NotFoundError': return 'err.notFound';
    case 'NotReadableError': return 'err.busy';
    default: return 'err.generic';
  }
}

export default function CameraView({ onClose }) {
  const { t, fmt } = useLang();
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const stageRef = useRef(null);
  const closeRef = useRef(null);
  const rendererRef = useRef(null);
  const detectorRef = useRef(null);
  const streamRef = useRef(null);
  const vfRef = useRef({ w: 0, h: 0 });
  const mirrorRef = useRef(false);
  const trackerRef = useRef(null);
  if (trackerRef.current === null) trackerRef.current = new SubjectTracker();
  const toastTimerRef = useRef(null);
  const shotUrlRef = useRef(null);

  const [facing, setFacing] = useState('environment');
  const [status, setStatus] = useState('starting');
  const [error, setError] = useState('');
  const [videoSize, setVideoSize] = useState({ w: 0, h: 0 });
  const [stageSize, setStageSize] = useState({ w: 0, h: 0 });
  const [gridOn, setGridOn] = useState(true);
  const [profileId, setProfileId] = useState(DEFAULT_PROFILE);
  const [detectState, setDetectState] = useState('loading');
  const [subject, setSubject] = useState(null);
  const [trackState, setTrackState] = useState('idle');
  const [tapPoint, setTapPoint] = useState(null);
  const [toast, setToast] = useState('');
  const [lastShot, setLastShot] = useState(null);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [flash, setFlash] = useState(false);

  const roll = useLevel(true);
  const profile = useMemo(
    () => FILM_PROFILES.find((p) => p.id === profileId) || FILM_PROFILES[0],
    [profileId]
  );

  // Mirino: il fotogramma intero del sensore, adattato allo spazio disponibile.
  // Così la griglia cade sulla foto vera, non su un ritaglio.
  const vf = useMemo(() => {
    if (!videoSize.w || !stageSize.w) return { w: 0, h: 0 };
    const s = Math.min(stageSize.w / videoSize.w, stageSize.h / videoSize.h);
    return { w: Math.floor(videoSize.w * s), h: Math.floor(videoSize.h * s) };
  }, [videoSize, stageSize]);

  useEffect(() => { vfRef.current = vf; }, [vf]);
  useEffect(() => { mirrorRef.current = facing === 'user'; }, [facing]);
  useEffect(() => { closeRef.current && closeRef.current.focus(); }, []);

  // Dimensione dello spazio per il mirino.
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return undefined;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setStageSize({ w: width, h: height });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Risoluzione interna del canvas = mirino × densità schermo (max 2 per la batteria).
  useEffect(() => {
    const c = canvasRef.current;
    if (!c || !vf.w) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    c.width = Math.round(vf.w * dpr);
    c.height = Math.round(vf.h * dpr);
  }, [vf]);

  // Motore colore.
  useEffect(() => {
    try {
      rendererRef.current = new FilmRenderer(canvasRef.current);
    } catch {
      setError('err.webgl');
      setStatus('error');
    }
    // Niente loseContext qui: in sviluppo (StrictMode) il canvas viene riusato subito.
    // Il contesto viene liberato quando il canvas esce dal DOM.
    return () => { rendererRef.current = null; };
  }, []);

  useEffect(() => {
    if (rendererRef.current) rendererRef.current.setProfile(profile.params);
  }, [profile]);

  // Flusso video. Si riavvia quando si cambia fotocamera.
  useEffect(() => {
    let cancelled = false;
    const video = videoRef.current;
    if (!rendererRef.current) return undefined;
    setStatus('starting');
    (async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: false,
          video: { facingMode: { ideal: facing }, width: { ideal: 1920 }, height: { ideal: 1440 } }
        });
        if (cancelled) { stream.getTracks().forEach((t) => t.stop()); return; }
        streamRef.current = stream;
        video.srcObject = stream;
        await video.play();
        setVideoSize({ w: video.videoWidth, h: video.videoHeight });
        setStatus('live');
      } catch (err) {
        if (!cancelled) { setError(cameraErrorKey(err)); setStatus('error'); }
      }
    })();
    const onResize = () => setVideoSize({ w: video.videoWidth, h: video.videoHeight });
    video.addEventListener('resize', onResize);
    return () => {
      cancelled = true;
      video.removeEventListener('resize', onResize);
      if (streamRef.current) streamRef.current.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
      video.srcObject = null;
    };
  }, [facing]);

  // Rilevatore: caricato una volta sola, in parallelo alla fotocamera.
  useEffect(() => {
    let alive = true;
    createDetector()
      .then((d) => {
        if (!alive) { d.close(); return; }
        detectorRef.current = d;
        setDetectState('ready');
      })
      .catch(() => alive && setDetectState('failed'));
    return () => {
      alive = false;
      if (detectorRef.current) detectorRef.current.close();
      detectorRef.current = null;
    };
  }, []);

  // Fotografia dello stato del tracciamento per l'interfaccia.
  const publish = useCallback(() => {
    const tr = trackerRef.current;
    const { w: W, h: H } = vfRef.current;
    setTrackState(tr.state);
    setTapPoint(tr.state === 'seeking' ? { x: tr.tapX, y: tr.tapY } : null);
    setSubject(tr.state === 'tracking' && tr.box && W ? { box: tr.box, ...analyze(tr.box, W, H) } : null);
  }, []);

  // Ciclo: disegno a ogni fotogramma. Il rilevatore gira solo dopo un tocco sul soggetto.
  useEffect(() => {
    let raf;
    let lastDetect = 0;
    const loop = (t) => {
      raf = requestAnimationFrame(loop);
      const video = videoRef.current;
      const r = rendererRef.current;
      if (!video || !r || video.readyState < 2 || !video.videoWidth) return;
      r.render(video, { mirror: mirrorRef.current });

      const tracker = trackerRef.current;
      const now = performance.now();
      const before = tracker.state;
      tracker.tick(now);
      if (tracker.state !== before) publish();

      const det = detectorRef.current;
      const { w: W } = vfRef.current;
      if (!det || !W || !tracker.wantsDetection() || t - lastDetect < DETECT_INTERVAL_MS) return;
      lastDetect = t;
      try {
        const res = det.detectForVideo(video, now);
        tracker.update(mapDetections(res.detections, video.videoWidth, W, mirrorRef.current), now);
        publish();
      } catch {
        // Un fotogramma saltato non deve fermare il ciclo.
      }
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [publish]);

  // Tocco sul mirino: sceglie il soggetto. Un nuovo tocco sostituisce il precedente.
  const selectAt = useCallback((x, y) => {
    if (status !== 'live' || detectState !== 'ready') return;
    trackerRef.current.start(x, y, performance.now());
    publish();
  }, [status, detectState, publish]);

  const onTap = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    selectAt(e.clientX - rect.left, e.clientY - rect.top);
  }, [selectAt]);

  // Da tastiera (accessibilità): Invio o Spazio scelgono il soggetto al centro del mirino.
  const onViewfinderKey = useCallback((e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    e.preventDefault();
    const { w: W, h: H } = vfRef.current;
    selectAt(W / 2, H / 2);
  }, [selectAt]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') (sheetOpen ? setSheetOpen(false) : onClose()); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, sheetOpen]);

  useEffect(() => () => {
    if (shotUrlRef.current) URL.revokeObjectURL(shotUrlRef.current);
    clearTimeout(toastTimerRef.current);
  }, []);

  const showToast = useCallback((msg) => {
    setToast(msg);
    clearTimeout(toastTimerRef.current);
    toastTimerRef.current = setTimeout(() => setToast(''), 2200);
  }, []);

  const shoot = useCallback(async () => {
    const video = videoRef.current;
    if (status !== 'live' || !video) return;
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setFlash(true);
      setTimeout(() => setFlash(false), 140);
    }
    try {
      const blob = await captureFrame(video, profile.params, mirrorRef.current);
      if (shotUrlRef.current) URL.revokeObjectURL(shotUrlRef.current);
      const url = URL.createObjectURL(blob);
      shotUrlRef.current = url;
      const stamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
      const name = `${APP_NAME.toLowerCase()}-${profile.id}-${stamp}.jpg`;
      setLastShot({ url, blob, profileName: profile.name, name });
      // Android: salvataggio automatico nei Download. iPhone: serve il tocco su "Salva in Foto".
      if (IS_ANDROID) {
        downloadUrl(url, name);
        showToast(t('toast.saved'));
      }
    } catch {
      setError('err.shot');
    }
  }, [status, profile, showToast, t]);

  const share = useCallback(async () => {
    if (!lastShot) return;
    const file = new File([lastShot.blob], lastShot.name, { type: 'image/jpeg' });
    try {
      await navigator.share({ files: [file], title: APP_NAME });
    } catch {
      // Condivisione annullata: nessuna azione.
    }
  }, [lastShot]);

  const canShare = useMemo(() => {
    if (!lastShot || !navigator.canShare) return false;
    try {
      return navigator.canShare({ files: [new File([lastShot.blob], lastShot.name, { type: 'image/jpeg' })] });
    } catch {
      return false;
    }
  }, [lastShot]);

  const levelOk = roll != null && Math.abs(roll) < 1;
  const levelText = roll == null ? t('cam.level') : `${fmt(Math.abs(roll), 1)}°`;

  let pill;
  if (status !== 'live') pill = null;
  else if (detectState === 'loading') pill = { text: t('cam.detect.loading'), color: PAPER };
  else if (detectState === 'failed') pill = { text: t('cam.detect.failed'), color: PAPER };
  else if (trackState === 'seeking') pill = { text: t('cam.seeking'), color: PAPER };
  else if (trackState === 'none') pill = { text: t('cam.detect.none'), color: PAPER };
  else if (trackState === 'lost') pill = { text: t('cam.lost'), color: PAPER };
  else if (trackState === 'tracking' && subject) pill = { text: t(`state.${subject.state}`), color: subject.state === 'on' ? TEAL : PAPER };
  else pill = { text: t('cam.tapHint'), color: PAPER };

  const sc = subject && (subject.state === 'on' ? TEAL : PAPER);
  const b = subject && subject.box;
  const k = b ? Math.min(14, b.w / 3, b.h / 3) : 0;

  return (
    <div className="cam" role="dialog" aria-modal="true" aria-label={t('cam.dialog')}>
      <div className="cam-top">
        <button ref={closeRef} type="button" className="glass-round" onClick={onClose} aria-label={t('cam.close')}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={PAPER} strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
        <div className="glass-pill level" aria-live="off" aria-label={roll == null ? t('cam.level.off') : t('cam.level.aria', { value: levelText })}>
          <span className="level-line" style={{ transform: `rotate(${roll || 0}deg)`, background: levelOk ? TEAL : PAPER, opacity: roll == null ? 0.4 : 1 }} />
          {levelText}
        </div>
        <button
          type="button"
          className={`glass-round${gridOn ? ' is-on' : ''}`}
          onClick={() => setGridOn((v) => !v)}
          aria-pressed={gridOn}
          aria-label={t('cam.grid')}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M9 3v18M15 3v18M3 9h18M3 15h18" /></svg>
        </button>
      </div>

      <div className="cam-stage" ref={stageRef}>
        <div
          className="vf"
          style={{ width: vf.w, height: vf.h }}
          onClick={onTap}
          onKeyDown={onViewfinderKey}
          role="button"
          tabIndex={0}
          aria-label={t('cam.viewfinder')}
        >
          <video ref={videoRef} className="vf-video" playsInline muted autoPlay />
          <canvas ref={canvasRef} className="vf-canvas" />
          {vf.w > 0 && (
            <svg className="vf-overlay" width={vf.w} height={vf.h} aria-hidden="true">
              {gridOn && (
                <g stroke="rgba(255,255,255,0.55)" strokeWidth="1">
                  <line x1={vf.w / 3} y1="0" x2={vf.w / 3} y2={vf.h} />
                  <line x1={(2 * vf.w) / 3} y1="0" x2={(2 * vf.w) / 3} y2={vf.h} />
                  <line x1="0" y1={vf.h / 3} x2={vf.w} y2={vf.h / 3} />
                  <line x1="0" y1={(2 * vf.h) / 3} x2={vf.w} y2={(2 * vf.h) / 3} />
                </g>
              )}
              {tapPoint && <circle className="tap-ring" cx={tapPoint.x} cy={tapPoint.y} r="22" fill="none" stroke={PAPER} strokeWidth="2" />}
              {subject && (
                <g>
                  <g stroke={sc} strokeWidth="2" fill="none">
                    <path d={`M${b.x},${b.y + k}V${b.y}H${b.x + k}`} />
                    <path d={`M${b.x + b.w - k},${b.y}H${b.x + b.w}V${b.y + k}`} />
                    <path d={`M${b.x},${b.y + b.h - k}V${b.y + b.h}H${b.x + k}`} />
                    <path d={`M${b.x + b.w - k},${b.y + b.h}H${b.x + b.w}V${b.y + b.h - k}`} />
                  </g>
                  {(subject.state === 'near' || subject.state === 'off') && (
                    <g>
                      <line x1={subject.anchor.x} y1={subject.anchor.y} x2={subject.nearest.x} y2={subject.nearest.y} stroke={PAPER} strokeWidth="1.5" strokeDasharray="4 5" />
                      <circle cx={subject.nearest.x} cy={subject.nearest.y} r="7" fill="none" stroke={PAPER} strokeWidth="1.5" />
                    </g>
                  )}
                  <circle cx={subject.anchor.x} cy={subject.anchor.y} r="6" fill={sc} />
                  {subject.state === 'on' && <circle cx={subject.anchor.x} cy={subject.anchor.y} r="11" fill="none" stroke={TEAL} strokeOpacity="0.4" strokeWidth="5" />}
                  <text x={b.x + 2} y={Math.max(14, b.y - 8)} fill={sc} fontSize="12" fontWeight="600" fontFamily="Gelasio, Georgia, serif">{t(`subject.${b.category}`, null, t('subject.default'))}</text>
                </g>
              )}
            </svg>
          )}
          {flash && <div className="vf-flash" />}
        </div>

        {toast && <div className="glass-pill toast" role="status">{toast}</div>}
        {status === 'error' && <p className="cam-error" role="alert">{t(error)}</p>}
        {status === 'starting' && <p className="cam-hint">{t('cam.starting')}</p>}
        {pill && (
          <div className="glass-pill status" role="status">
            <span className="dot" style={{ background: pill.color }} />
            {pill.text}
          </div>
        )}
      </div>

      <div className="cam-bottom">
        <div className="profile-head">
          <span className="profile-name">{profile.name}</span>
          <span className="profile-note">{t(`profile.${profile.id}`)}</span>
        </div>
        <div className="chips" role="radiogroup" aria-label={t('cam.profiles')}>
          {FILM_PROFILES.map((p) => (
            <button
              key={p.id}
              type="button"
              role="radio"
              aria-checked={p.id === profileId}
              className={`chip${p.id === profileId ? ' is-on' : ''}`}
              onClick={() => setProfileId(p.id)}
            >
              {p.name}
            </button>
          ))}
        </div>
        <div className="shutter-row">
          <button type="button" className="thumb" onClick={() => lastShot && setSheetOpen(true)} disabled={!lastShot} aria-label={t('cam.lastShot')}>
            {lastShot && <img src={lastShot.url} alt="" />}
          </button>
          <button type="button" className="shutter" onClick={shoot} disabled={status !== 'live'} aria-label={t('cam.shutter')}>
            <span />
          </button>
          <button
            type="button"
            className="flip"
            onClick={() => { trackerRef.current.reset(); publish(); setFacing((f) => (f === 'user' ? 'environment' : 'user')); }}
            aria-label={t('cam.flip')}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={PAPER} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 11a8 8 0 0 0-14.3-4.9L4 8" /><path d="M4 4v4h4" /><path d="M4 13a8 8 0 0 0 14.3 4.9L20 16" /><path d="M20 20v-4h-4" /></svg>
          </button>
        </div>
      </div>

      {sheetOpen && lastShot && (
        <div className="sheet" role="dialog" aria-modal="true" aria-label={t('shot.dialog')}>
          <img src={lastShot.url} alt={t('shot.alt', { name: lastShot.profileName })} />
          <div className="sheet-actions">
            {canShare && <button type="button" className="btn-paper" onClick={share}>{IS_IOS ? t('shot.saveToPhotos') : t('shot.share')}</button>}
            {(!IS_IOS || !canShare) && <a className="btn-glass" href={lastShot.url} download={lastShot.name}>{t('shot.save')}</a>}
            <button type="button" className="btn-glass" onClick={() => setSheetOpen(false)}>{t('shot.close')}</button>
          </div>
        </div>
      )}
    </div>
  );
}
