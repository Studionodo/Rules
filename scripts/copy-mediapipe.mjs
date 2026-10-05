// Copia i file wasm di MediaPipe in public/mediapipe.
// Così wasm e libreria JS hanno sempre la stessa versione e vengono serviti dal nostro dominio.
import { cpSync, existsSync, mkdirSync } from 'node:fs';

const src = 'node_modules/@mediapipe/tasks-vision/wasm';
const dst = 'public/mediapipe';

if (!existsSync(src)) {
  console.error('[copy-mediapipe] wasm non trovato: esegui prima npm install');
  process.exit(1);
}
mkdirSync(dst, { recursive: true });
cpSync(src, dst, { recursive: true });
console.log('[copy-mediapipe] wasm copiati in', dst);
