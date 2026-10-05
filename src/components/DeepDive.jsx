import { useEffect, useRef } from 'react';
import { useLang } from '../i18n/LangContext.jsx';

// Scheda di approfondimento in una finestra centrata.
// <dialog> nativo: focus intrappolato, Esc per chiudere, sfondo inerte.
export default function DeepDive({ entry, onClose }) {
  const { t } = useLang();
  const ref = useRef(null);
  const bodyRef = useRef(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return undefined;
    if (!d.open) d.showModal();
    if (bodyRef.current) bodyRef.current.scrollTop = 0;
    const onNativeClose = () => onClose();
    d.addEventListener('close', onNativeClose);
    return () => d.removeEventListener('close', onNativeClose);
  }, [entry, onClose]);

  // Tocco sullo sfondo scuro: chiude.
  const onBackdrop = (e) => {
    if (e.target === ref.current) ref.current.close();
  };

  return (
    <dialog ref={ref} className="deep" aria-labelledby="deep-title" onClick={onBackdrop}>
      <div className="deep-card">
        <header className="deep-head">
          <div className="deep-titles">
            <span className={`deep-kind is-${entry.kind}`}>{t(`deep.kind.${entry.kind}`)}</span>
            <h2 id="deep-title">{entry.title}</h2>
          </div>
          <button type="button" className="deep-close" onClick={() => ref.current.close()} aria-label={t('deep.close')}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>
        </header>

        <div className="deep-body" ref={bodyRef}>
          {entry.sections.map((s) => (
            <section key={s.t} className="deep-section">
              <h3>{s.t}</h3>
              {s.p && s.p.map((para) => <p key={para.slice(0, 24)}>{para}</p>)}
              {s.li && (
                <ul>
                  {s.li.map((item) => <li key={item.slice(0, 24)}>{item}</li>)}
                </ul>
              )}
            </section>
          ))}
          <section className="deep-exercise">
            <h3>{t('deep.exercise')}</h3>
            <p>{entry.exercise}</p>
          </section>
        </div>
      </div>
    </dialog>
  );
}
