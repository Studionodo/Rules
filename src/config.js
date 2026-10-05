// Unico punto in cui cambiare nome e versione dell'app.
// Il nome è fisso: resta "Rules" in tutte le lingue.
export const APP_NAME = 'Rules';
export const APP_VERSION = '0.2.1';

// Footer.
export const KOFI_URL = 'https://ko-fi.com/istantelabs/tip';
export const STUDIO_NAME = 'StudioNodo';
export const STUDIO_URL = 'https://github.com/Studionodo';

// Rilevamento soggetto (MediaPipe Object Detector).
// wasm: copiati in public/mediapipe da scripts/copy-mediapipe.mjs (stessa versione della libreria).
export const MEDIAPIPE_WASM = '/mediapipe';
// Modello: prima quello scaricato in build (stesso dominio), poi quello remoto di Google come riserva.
export const DETECTOR_MODELS = [
  '/models/efficientdet_lite0.tflite',
  'https://storage.googleapis.com/mediapipe-models/object_detector/efficientdet_lite0/float16/1/efficientdet_lite0.tflite'
];
// Ogni quanto analizzare un fotogramma (ms). Più basso = più reattivo, più batteria.
export const DETECT_INTERVAL_MS = 120;
