// Rilevamento del soggetto con MediaPipe Object Detector (EfficientDet-Lite0, 80 categorie COCO).
// Caricato solo all'apertura della fotocamera: la pagina resta leggera.
import { MEDIAPIPE_WASM, DETECTOR_MODELS } from '../config.js';

export async function createDetector() {
  const { FilesetResolver, ObjectDetector } = await import('@mediapipe/tasks-vision');
  const vision = await FilesetResolver.forVisionTasks(MEDIAPIPE_WASM);
  let lastError;
  for (const modelAssetPath of DETECTOR_MODELS) {
    for (const delegate of ['GPU', 'CPU']) {
      try {
        return await ObjectDetector.createFromOptions(vision, {
          baseOptions: { modelAssetPath, delegate },
          runningMode: 'VIDEO',
          scoreThreshold: 0.45,
          maxResults: 5
        });
      } catch (err) {
        lastError = err;
      }
    }
  }
  throw lastError || new Error('Rilevamento non disponibile');
}

// Sceglie il soggetto principale: punteggio × dimensione, con preferenza per le persone.
// Esclude ciò che riempie quasi tutto il fotogramma (non è un soggetto, è la scena).
export function pickSubject(detections, vw, vh) {
  let best = null;
  let bestScore = 0;
  for (const d of detections || []) {
    const cat = d.categories && d.categories[0];
    if (!cat || !d.boundingBox) continue;
    const { originX, originY, width, height } = d.boundingBox;
    const area = (width * height) / (vw * vh);
    if (area > 0.7) continue;
    const s = cat.score * Math.sqrt(area) * (cat.categoryName === 'person' ? 1.25 : 1);
    if (s > bestScore) {
      bestScore = s;
      best = { x: originX, y: originY, w: width, h: height, category: cat.categoryName };
    }
  }
  return best;
}
