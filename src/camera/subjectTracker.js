// Seguimento del soggetto scelto dall'utente con un tocco.
// Principi: nessun soggetto automatico; si aggancia solo ciò che sta sotto il dito;
// una volta agganciato non passa mai a un altro oggetto, al massimo dichiara di averlo perso.
//
// Stati: idle (nessun tocco) · seeking (cerca sotto il dito) · tracking (agganciato)
//        none (niente di riconoscibile, messaggio temporaneo) · lost (perso, serve un nuovo tocco)
import {
  ACQUIRE_SCORE, TRACK_SCORE, ACQUIRE_HITS, SEEK_TIMEOUT_MS, LOST_AFTER_MS, NONE_HOLD_MS
} from '../config.js';
import { smoothBox } from './composition.js';

const area = (b) => b.w * b.h;
const center = (b) => ({ x: b.x + b.w / 2, y: b.y + b.h / 2 });

export function iou(a, b) {
  const x1 = Math.max(a.x, b.x);
  const y1 = Math.max(a.y, b.y);
  const x2 = Math.min(a.x + a.w, b.x + b.w);
  const y2 = Math.min(a.y + a.h, b.y + b.h);
  const inter = Math.max(0, x2 - x1) * Math.max(0, y2 - y1);
  const union = area(a) + area(b) - inter;
  return union > 0 ? inter / union : 0;
}

// Tra i riquadri sicuri che contengono il punto toccato, sceglie il più piccolo (il più specifico).
// Piccolo margine intorno ai riquadri: un dito non è un puntatore.
export function pickAt(dets, x, y, minScore) {
  let best = null;
  for (const d of dets) {
    if (d.score < minScore) continue;
    const m = Math.min(d.w, d.h) * 0.06;
    if (x < d.x - m || x > d.x + d.w + m || y < d.y - m || y > d.y + d.h + m) continue;
    if (!best || area(d) < area(best)) best = d;
  }
  return best;
}

// Ritrova il soggetto agganciato nel fotogramma nuovo: stessa categoria, vicino a dove era.
export function matchTrack(dets, box, minScore) {
  const c = center(box);
  const reach = 0.5 * Math.max(box.w, box.h);
  let best = null;
  let bestDist = Infinity;
  for (const d of dets) {
    if (d.category !== box.category || d.score < minScore) continue;
    const dc = center(d);
    const dist = Math.hypot(dc.x - c.x, dc.y - c.y);
    if (iou(d, box) < 0.2 && dist > reach) continue;
    if (dist < bestDist) { bestDist = dist; best = d; }
  }
  return best;
}

export class SubjectTracker {
  constructor() { this.reset(); }

  reset() {
    this.state = 'idle';
    this.box = null;
    this.tapX = 0;
    this.tapY = 0;
    this.startedAt = 0;
    this.lastSeenAt = 0;
    this.noneAt = 0;
    this.cand = null;
    this.hits = 0;
  }

  start(x, y, now) {
    this.reset();
    this.state = 'seeking';
    this.tapX = x;
    this.tapY = y;
    this.startedAt = now;
  }

  // Il modello serve solo mentre cerca o segue: negli altri stati non gira (risparmio di batteria).
  wantsDetection() {
    return this.state === 'seeking' || this.state === 'tracking';
  }

  // Scadenze: va chiamato a ogni fotogramma, anche quando il modello non gira.
  tick(now) {
    if (this.state === 'seeking' && now - this.startedAt > SEEK_TIMEOUT_MS) {
      this.state = 'none';
      this.noneAt = now;
    } else if (this.state === 'none' && now - this.noneAt > NONE_HOLD_MS) {
      this.reset();
    } else if (this.state === 'tracking' && now - this.lastSeenAt > LOST_AFTER_MS) {
      this.state = 'lost';
      this.box = null;
    }
  }

  // dets: riquadri già in pixel del mirino, con { category, score, x, y, w, h }.
  update(dets, now) {
    if (this.state === 'seeking') {
      const c = pickAt(dets, this.tapX, this.tapY, ACQUIRE_SCORE);
      if (c) {
        if (this.cand === c.category) this.hits += 1;
        else { this.cand = c.category; this.hits = 1; }
        if (this.hits >= ACQUIRE_HITS) {
          this.state = 'tracking';
          this.box = { category: c.category, x: c.x, y: c.y, w: c.w, h: c.h };
          this.lastSeenAt = now;
        }
      } else {
        this.cand = null;
        this.hits = 0;
      }
    } else if (this.state === 'tracking') {
      const m = matchTrack(dets, this.box, TRACK_SCORE);
      if (m) {
        this.box = smoothBox(this.box, m);
        this.lastSeenAt = now;
      }
    }
    this.tick(now);
  }
}
