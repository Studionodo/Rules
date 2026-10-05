// Lingua corrente dell'app: rilevamento, memoria, traduzione dei testi.
// Ordine di scelta: ?lang=en nell'indirizzo, poi l'ultima scelta salvata, poi la lingua del telefono.
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { APP_NAME, APP_VERSION } from '../config.js';
import { STRINGS } from './strings.js';
import * as contentIt from './content.it.js';
import * as contentEn from './content.en.js';
import { DEEP as deepIt } from './deep.it.js';
import { DEEP as deepEn } from './deep.en.js';

export const LANGS = ['it', 'en'];
const STORAGE_KEY = 'rules.lang';
const LOCALES = { it: 'it-IT', en: 'en-US' };
const CONTENT = {
  it: { RULES: contentIt.RULES, TOOLS: contentIt.TOOLS, GESTALT: contentIt.GESTALT, DEEP: deepIt },
  en: { RULES: contentEn.RULES, TOOLS: contentEn.TOOLS, GESTALT: contentEn.GESTALT, DEEP: deepEn }
};

function detectLang() {
  try {
    const q = new URLSearchParams(window.location.search).get('lang');
    if (LANGS.includes(q)) return q;
  } catch { /* indirizzo non leggibile: si prosegue */ }
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (LANGS.includes(saved)) return saved;
  } catch { /* storage non disponibile (navigazione privata): si prosegue */ }
  const first = (navigator.languages && navigator.languages[0]) || navigator.language || 'it';
  return String(first).toLowerCase().startsWith('it') ? 'it' : 'en';
}

function interpolate(str, vars) {
  if (!vars) return str;
  return str.replace(/\{(\w+)\}/g, (m, k) => (vars[k] != null ? String(vars[k]) : m));
}

const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(detectLang);

  const t = useCallback((key, vars, fallback) => {
    const dict = STRINGS[lang];
    let str = dict[key];
    if (str == null) {
      if (import.meta.env.DEV && fallback == null) console.warn(`[i18n] chiave mancante "${key}" (${lang})`);
      str = STRINGS.it[key];
    }
    if (str == null) return fallback != null ? fallback : key;
    return interpolate(str, { app: APP_NAME, version: APP_VERSION, ...vars });
  }, [lang]);

  const fmt = useCallback((n, digits = 1) => new Intl.NumberFormat(LOCALES[lang], {
    minimumFractionDigits: digits, maximumFractionDigits: digits
  }).format(n), [lang]);

  const setLang = useCallback((next) => {
    if (LANGS.includes(next)) setLangState(next);
  }, []);

  // Pagina, titolo, descrizione, memoria e indirizzo seguono la lingua scelta.
  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t('meta.title');
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', t('meta.description'));
    try { window.localStorage.setItem(STORAGE_KEY, lang); } catch { /* ignora */ }
    try {
      const url = new URL(window.location.href);
      if (url.searchParams.has('lang')) {
        url.searchParams.set('lang', lang);
        window.history.replaceState(window.history.state, '', url);
      }
    } catch { /* ignora */ }
  }, [lang, t]);

  const value = useMemo(
    () => ({ lang, setLang, t, fmt, content: CONTENT[lang] }),
    [lang, setLang, t, fmt]
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang va usato dentro <LangProvider>');
  return ctx;
}
