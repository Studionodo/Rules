// Valuta dove cade il soggetto rispetto ai punti di forza della regola dei terzi.
// Tutte le coordinate sono in pixel del mirino (viewfinder).

export function powerPoints(W, H) {
  const xs = [W / 3, (2 * W) / 3];
  const ys = [H / 3, (2 * H) / 3];
  return xs.flatMap((x) => ys.map((y) => ({ x, y })));
}

// Il punto che conta: per una persona la zona testa/petto, per il resto il centro.
export function anchorOf(box) {
  const yFactor = box.category === 'person' ? 0.22 : 0.5;
  return { x: box.x + box.w / 2, y: box.y + box.h * yFactor };
}

export function analyze(box, W, H) {
  const anchor = anchorOf(box);
  const pts = powerPoints(W, H);
  let nearest = pts[0];
  let dist = Infinity;
  for (const p of pts) {
    const d = Math.hypot((p.x - anchor.x) / W, (p.y - anchor.y) / H);
    if (d < dist) { dist = d; nearest = p; }
  }
  const fromCenter = Math.hypot((anchor.x - W / 2) / W, (anchor.y - H / 2) / H);

  let state;
  if (dist < 0.05) state = 'on';
  else if (fromCenter < 0.06) state = 'center';
  else if (dist < 0.13) state = 'near';
  else state = 'off';

  return { anchor, nearest, state };
}

// Smorza il tremolio del riquadro tra un'analisi e l'altra.
export function smoothBox(prev, next, k = 0.4) {
  if (!prev || prev.category !== next.category) return next;
  return {
    category: next.category,
    x: prev.x + (next.x - prev.x) * k,
    y: prev.y + (next.y - prev.y) * k,
    w: prev.w + (next.w - prev.w) * k,
    h: prev.h + (next.h - prev.h) * k
  };
}
