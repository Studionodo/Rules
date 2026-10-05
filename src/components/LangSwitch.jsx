import { useLang } from '../i18n/LangContext.jsx';

const OPTIONS = [
  { code: 'it', label: 'IT', full: 'Italiano' },
  { code: 'en', label: 'EN', full: 'English' }
];

// Selettore di lingua a due segmenti. L'etichetta è bilingue perché deve capirla chiunque.
export default function LangSwitch() {
  const { lang, setLang } = useLang();
  return (
    <div className="lang" role="group" aria-label="Lingua / Language">
      {OPTIONS.map((o) => (
        <button
          key={o.code}
          type="button"
          lang={o.code}
          className={`lang-btn${lang === o.code ? ' is-on' : ''}`}
          aria-pressed={lang === o.code}
          title={o.full}
          onClick={() => setLang(o.code)}
        >
          <span aria-hidden="true">{o.label}</span>
          <span className="sr-only">{o.full}</span>
        </button>
      ))}
    </div>
  );
}
