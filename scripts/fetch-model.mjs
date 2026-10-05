// Scarica il modello di rilevamento in public/models al momento della build.
// Se il download fallisce la build NON si ferma: l'app userà il modello remoto.
import { existsSync, mkdirSync, writeFileSync, statSync } from 'node:fs';

const URL_MODEL =
  'https://storage.googleapis.com/mediapipe-models/object_detector/efficientdet_lite0/float16/1/efficientdet_lite0.tflite';
const DIR = 'public/models';
const OUT = `${DIR}/efficientdet_lite0.tflite`;

if (existsSync(OUT) && statSync(OUT).size > 100_000) {
  console.log('[fetch-model] modello già presente');
  process.exit(0);
}

try {
  const res = await fetch(URL_MODEL);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  mkdirSync(DIR, { recursive: true });
  writeFileSync(OUT, buf);
  console.log(`[fetch-model] modello salvato (${(buf.length / 1e6).toFixed(1)} MB)`);
} catch (err) {
  console.warn('[fetch-model] download non riuscito, si userà il modello remoto:', err.message);
}
