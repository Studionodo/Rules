// Rilevamento oggetti con MediaPipe Object Detector (EfficientDet-Lite0, 80 categorie COCO).
// Caricato solo all'apertura della fotocamera: la pagina resta leggera.
// Il modello gira SOLO dopo che l'utente ha toccato il soggetto (vedi subjectTracker.js).
import { MEDIAPIPE_WASM, DETECTOR_MODELS, DETECT_MIN_SCORE } from '../config.js';

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
          scoreThreshold: DETECT_MIN_SCORE,
          maxResults: 10
        });
      } catch (err) {
        lastError = err;
      }
    }
  }
  throw lastError || new Error('Rilevamento non disponibile');
}

// Converte i riquadri del modello (pixel del video) in pixel del mirino.
// Con la fotocamera frontale l'anteprima è specchiata: si specchia anche il riquadro.
export function mapDetections(detections, videoW, W, mirror) {
  const s = W / videoW;
  const out = [];
  for (const d of detections || []) {
    const cat = d.categories && d.categories[0];
    if (!cat || !d.boundingBox) continue;
    const { originX, originY, width, height } = d.boundingBox;
    out.push({
      category: cat.categoryName,
      score: cat.score,
      x: mirror ? W - (originX + width) * s : originX * s,
      y: originY * s,
      w: width * s,
      h: height * s
    });
  }
  return out;
}
