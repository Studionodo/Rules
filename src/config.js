// Unico punto in cui cambiare nome e versione dell'app.
// Il nome è fisso: resta "Rules" in tutte le lingue.
export const APP_NAME = 'Rules';
export const APP_VERSION = '0.4.0';

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
export const DETECT_INTERVAL_MS = 150;

// Riconoscimento a tocco. Il rilevatore parte solo dopo che l'utente tocca il soggetto.
export const DETECT_MIN_SCORE = 0.35;   // soglia minima del modello (serve per il tracciamento)
export const ACQUIRE_SCORE = 0.5;       // confidenza richiesta per agganciare il soggetto toccato
export const TRACK_SCORE = 0.35;        // confidenza minima per continuare a seguirlo (isteresi)
export const ACQUIRE_HITS = 2;          // riconoscimenti consecutivi prima di mostrare il riquadro
export const SEEK_TIMEOUT_MS = 2000;    // dopo quanto si arrende se non trova nulla sotto il dito
export const LOST_AFTER_MS = 700;       // dopo quanto dichiara perso il soggetto
export const NONE_HOLD_MS = 2500;       // quanto resta il messaggio "niente di riconoscibile"
