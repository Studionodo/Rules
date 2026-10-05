import { lazy, Suspense, useCallback, useEffect, useState } from 'react';
import { APP_NAME, KOFI_URL, STUDIO_NAME, STUDIO_URL } from './config.js';
import { useLang } from './i18n/LangContext.jsx';
import { RULE_DIAGRAMS, GESTALT_GLYPHS, LogoMark } from './components/Diagrams.jsx';
import DeepDive from './components/DeepDive.jsx';
import LangSwitch from './components/LangSwitch.jsx';
import { requestMotionPermission } from './camera/useLevel.js';

// La fotocamera (e MediaPipe) si scaricano solo quando servono.
const CameraView = lazy(() => import('./components/CameraView.jsx'));

function MoreButton({ id, title, onOpen, dark = false }) {
  const { t } = useLang();
  return (
    <button
      type="button"
      className={`more${dark ? ' is-dark' : ''}`}
      onClick={() => onOpen(id)}
      aria-haspopup="dialog"
      aria-label={t('more.aria', { title })}
    >
      {t('more')}
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>
    </button>
  );
}

export default function App() {
  const { t, content } = useLang();
  const { RULES, TOOLS, GESTALT, DEEP } = content;
  const [cameraOpen, setCameraOpen] = useState(false);
  const [deepId, setDeepId] = useState(null);

  const openCamera = useCallback(async () => {
    // Su iOS il permesso dei sensori va chiesto dentro il tocco, prima di qualsiasi altra attesa.
    await requestMotionPermission();
    window.history.pushState({ camera: true }, '');
    setCameraOpen(true);
  }, []);

  const closeCamera = useCallback(() => {
    if (window.history.state && window.history.state.camera) window.history.back();
    else setCameraOpen(false);
  }, []);

  const openDeep = useCallback((id) => {
    window.history.pushState({ deep: true }, '');
    setDeepId(id);
  }, []);

  const closeDeep = useCallback(() => {
    if (window.history.state && window.history.state.deep) window.history.back();
    else setDeepId(null);
  }, []);

  // Il tasto Indietro di Android chiude fotocamera o scheda invece di uscire dall'app.
  useEffect(() => {
    const onPop = () => { setCameraOpen(false); setDeepId(null); };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  useEffect(() => {
    document.body.style.overflow = cameraOpen || deepId ? 'hidden' : '';
  }, [cameraOpen, deepId]);

  return (
    <>
      <div className="page" aria-hidden={cameraOpen}>
        <header className="topbar">
          <div className="brand">
            <LogoMark />
            <span className="brand-name">{APP_NAME}</span>
          </div>
          <LangSwitch />
        </header>

        <section className="hero">
          <span className="eyebrow">{t('hero.eyebrow')}</span>
          <h1>{t('hero.title1')}<br /><em>{t('hero.title2')}</em></h1>
          <p>{t('hero.body')}</p>
        </section>

        <nav className="index" aria-label={t('nav.label')}>
          {RULES.map((r) => <a key={r.id} href={`#${r.id}`}>{r.short}</a>)}
          <a href="#strumenti">{t('nav.tools')}</a>
          <a href="#gestalt" className="is-key">Gestalt</a>
        </nav>

        <main className="stack">
          {RULES.map((r) => {
            const Diagram = RULE_DIAGRAMS[r.id];
            return (
              <section key={r.id} id={r.id} className="rule">
                <div className="rule-head">
                  <span className="rule-num">{r.num}</span>
                  <h2>{r.title}</h2>
                </div>
                <div className="rule-figure"><Diagram /></div>
                <p className="rule-body">{r.body}</p>
                <p className="rule-break"><strong>{t('rule.break')}</strong> {r.breakIt}</p>
                <MoreButton id={r.id} title={r.title} onOpen={openDeep} />
              </section>
            );
          })}

          <div id="strumenti" className="group-head">
            <span className="eyebrow">{t('tools.eyebrow')}</span>
            <h2>{t('tools.title')}</h2>
            <p>{t('tools.intro')}</p>
          </div>

          {TOOLS.map((r) => {
            const Diagram = RULE_DIAGRAMS[r.id];
            const basis = GESTALT.find((g) => g.id === r.principle);
            return (
              <section key={r.id} id={r.id} className="rule">
                <div className="rule-head">
                  <span className="rule-num">{r.num}</span>
                  <h2>{r.title}</h2>
                </div>
                <div className="rule-figure"><Diagram /></div>
                <p className="rule-body">{r.body}</p>
                <p className="rule-break"><strong>{t('rule.break')}</strong> {r.breakIt}</p>
                {basis && <p className="rule-basis"><strong>{t('tool.basedOn')}</strong> <a href={`#${basis.id}`}>{basis.title}</a></p>}
                <MoreButton id={r.id} title={r.title} onOpen={openDeep} />
              </section>
            );
          })}

          <section id="gestalt" className="gestalt">
            <span className="eyebrow">{t('gestalt.eyebrow')}</span>
            <h2>{t('gestalt.title')}</h2>
            <p className="gestalt-intro">{t('gestalt.intro')}</p>
            <div className="gestalt-grid">
              {GESTALT.map((g) => {
                const Glyph = GESTALT_GLYPHS[g.id];
                return (
                  <article key={g.id} id={g.id} className="principle">
                    <Glyph />
                    <h3>{g.title}</h3>
                    <p>{g.body}</p>
                    <MoreButton id={g.id} title={g.title} onOpen={openDeep} dark />
                  </article>
                );
              })}
            </div>
          </section>

          <footer className="foot">
            <a className="coffee" href={KOFI_URL} target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 9h12v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V9z" />
                <path d="M16 11h1.5a2.5 2.5 0 0 1 0 5H16" />
                <path d="M8 3.5c0 1 1 1.5 1 2.5M12 3.5c0 1 1 1.5 1 2.5" />
              </svg>
              {t('foot.coffee')}
            </a>
            <span className="foot-meta">
              {t('foot.metaBefore')}<a href={STUDIO_URL} target="_blank" rel="noopener noreferrer">{STUDIO_NAME}</a>{t('foot.metaAfter')}
            </span>
          </footer>
        </main>

        <button type="button" className="fab" onClick={openCamera} aria-label={t('fab.aria')}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 8h3l1.6-2.4h6.8L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
            <circle cx="12" cy="13.2" r="3.6" />
          </svg>
          {t('fab')}
          <span className="fab-dot" />
        </button>
      </div>

      {deepId && DEEP[deepId] && <DeepDive entry={DEEP[deepId]} onClose={closeDeep} />}

      {cameraOpen && (
        <Suspense fallback={<div className="cam cam-loading">{t('cam.loading')}</div>}>
          <CameraView onClose={closeCamera} />
        </Suspense>
      )}
    </>
  );
}
