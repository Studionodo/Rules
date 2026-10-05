import { SubjectTracker, iou, pickAt, matchTrack } from '../src/camera/subjectTracker.js';
import { mapDetections } from '../src/camera/subjectDetector.js';

let fails = 0;
const ok = (name, cond) => { console.log((cond ? 'OK   ' : 'FAIL ') + name); if (!cond) fails++; };
const D = (category, x, y, w, h, score = 0.8) => ({ category, score, x, y, w, h });

// 1. Aggancio: servono 2 riconoscimenti consecutivi.
{
  const t = new SubjectTracker();
  t.start(100, 100, 0);
  t.update([D('dog', 60, 60, 100, 100)], 150);
  ok('1a dopo 1 riconoscimento è ancora seeking', t.state === 'seeking');
  t.update([D('dog', 62, 61, 100, 100)], 300);
  ok('1b dopo 2 riconoscimenti è tracking', t.state === 'tracking' && t.box.category === 'dog');
}

// 2. Il caso che oggi sballa: arriva un altro oggetto con punteggio più alto. Non deve saltare.
{
  const t = new SubjectTracker();
  t.start(100, 100, 0);
  t.update([D('dog', 60, 60, 100, 100, 0.6)], 150);
  t.update([D('dog', 60, 60, 100, 100, 0.6)], 300);
  const before = { ...t.box };
  t.update([D('dog', 64, 62, 100, 100, 0.5), D('person', 200, 40, 90, 260, 0.97), D('chair', 20, 200, 80, 80, 0.9)], 450);
  ok('2a resta sul cane, non salta su persona o sedia', t.state === 'tracking' && t.box.category === 'dog');
  ok('2b il riquadro si muove poco (smorzato)', Math.abs(t.box.x - before.x) < 4);
}

// 3. Tocco su una zona senza oggetti: dopo 2 s dice "niente di riconoscibile", poi torna idle.
{
  const t = new SubjectTracker();
  t.start(300, 300, 0);
  for (let now = 150; now <= 2100; now += 150) t.update([D('person', 10, 10, 50, 120)], now);
  ok('3a dopo il timeout è in stato none', t.state === 'none');
  t.tick(2100 + 2600);
  ok('3b dopo la pausa torna idle', t.state === 'idle');
}

// 4. Soggetto che sparisce: dopo 700 ms è perso e NON si aggancia a niente altro.
{
  const t = new SubjectTracker();
  t.start(100, 100, 0);
  t.update([D('dog', 60, 60, 100, 100)], 150);
  t.update([D('dog', 60, 60, 100, 100)], 300);
  t.update([D('person', 80, 80, 100, 100, 0.99)], 450);
  ok('4a un oggetto di altra categoria non lo sostituisce', t.state === 'tracking' && t.box.category === 'dog');
  t.tick(300 + 800);
  ok('4b senza conferme per 700 ms è lost', t.state === 'lost' && t.box === null);
  t.update([D('dog', 60, 60, 100, 100)], 1200);
  ok('4c da lost non riparte da solo', t.state === 'lost');
}

// 5. Confidenza: sotto 0.5 non si aggancia, ma una volta agganciato regge fino a 0.35.
{
  const t = new SubjectTracker();
  t.start(100, 100, 0);
  t.update([D('dog', 60, 60, 100, 100, 0.45)], 150);
  t.update([D('dog', 60, 60, 100, 100, 0.45)], 300);
  ok('5a confidenza 0.45 non basta per agganciare', t.state === 'seeking');
  t.update([D('dog', 60, 60, 100, 100, 0.7)], 450);
  t.update([D('dog', 60, 60, 100, 100, 0.7)], 600);
  ok('5b a 0.7 aggancia', t.state === 'tracking');
  t.update([D('dog', 62, 60, 100, 100, 0.38)], 750);
  ok('5c a 0.38 continua a seguirlo (isteresi)', t.state === 'tracking' && t.lastSeenAt === 750);
}

// 6. Più riquadri sotto il dito: sceglie il più piccolo e sicuro (persona contro zaino).
{
  const pick = pickAt([D('person', 50, 20, 100, 260, 0.95), D('backpack', 80, 100, 40, 50, 0.6)], 100, 120, 0.5);
  ok('6 sceglie il riquadro più specifico sotto il dito', pick && pick.category === 'backpack');
  const none = pickAt([D('person', 50, 20, 100, 260, 0.95)], 400, 400, 0.5);
  ok('6b fuori da ogni riquadro non sceglie nulla', none === null);
}

// 7. Movimento veloce del telefono: il riquadro si sposta molto ma resta riconosciuto (distanza dal centro).
{
  const t = new SubjectTracker();
  t.start(100, 100, 0);
  t.update([D('dog', 60, 60, 100, 100)], 150);
  t.update([D('dog', 60, 60, 100, 100)], 300);
  t.update([D('dog', 100, 70, 100, 100)], 450);
  ok('7 spostamento di 40 px: lo ritrova ancora', t.state === 'tracking' && t.lastSeenAt === 450);
}

// 8. Specchio (fotocamera frontale): x riflessa rispetto al mirino.
{
  const raw = [{ categories: [{ categoryName: 'person', score: 0.9 }], boundingBox: { originX: 100, originY: 50, width: 200, height: 300 } }];
  const normal = mapDetections(raw, 1000, 500, false)[0];
  const mirrored = mapDetections(raw, 1000, 500, true)[0];
  ok('8a senza specchio: x scalata', Math.abs(normal.x - 50) < 1e-6 && Math.abs(normal.w - 100) < 1e-6);
  ok('8b con specchio: x riflessa nel mirino', Math.abs(mirrored.x - (500 - (100 + 200) * 0.5)) < 1e-6);
}

// 9. Il rilevatore gira solo quando serve.
{
  const t = new SubjectTracker();
  ok('9a idle: nessuna analisi', !t.wantsDetection());
  t.start(1, 1, 0);
  ok('9b seeking: analisi attiva', t.wantsDetection());
  t.reset();
  ok('9c dopo reset: di nuovo ferma', !t.wantsDetection());
}

console.log(fails === 0 ? '\nTutti i test passati' : `\n${fails} test FALLITI`);
process.exit(fails ? 1 : 0);
