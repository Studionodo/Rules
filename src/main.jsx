import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { LangProvider } from './i18n/LangContext.jsx';
// Font inclusi nell'app (nessuna richiesta a servizi esterni): solo caratteri latini e solo i pesi usati.
import '@fontsource/playfair-display/latin-500.css';
import '@fontsource/playfair-display/latin-600.css';
import '@fontsource/playfair-display/latin-500-italic.css';
import '@fontsource/gelasio/latin-400.css';
import '@fontsource/gelasio/latin-500.css';
import '@fontsource/gelasio/latin-600.css';
import './styles.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LangProvider>
      <App />
    </LangProvider>
  </StrictMode>
);

if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  });
}
