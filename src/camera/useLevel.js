// Livella dell'orizzonte dal sensore di gravità (devicemotion).
// Su iOS serve un permesso esplicito, chiesto al tocco su "Inquadra" (vedi requestMotionPermission).
import { useEffect, useState } from 'react';

export async function requestMotionPermission() {
  try {
    const DME = window.DeviceMotionEvent;
    if (DME && typeof DME.requestPermission === 'function') {
      return (await DME.requestPermission()) === 'granted';
    }
    return true;
  } catch {
    return false;
  }
}

export function useLevel(active) {
  const [roll, setRoll] = useState(null);

  useEffect(() => {
    if (!active) return undefined;
    let smooth = null;
    let last = 0;

    const onMotion = (e) => {
      const g = e.accelerationIncludingGravity;
      if (!g || g.x == null || g.y == null) return;
      const mag = Math.hypot(g.x, g.y, g.z || 0);
      // Telefono quasi orizzontale: la livella non ha senso.
      if (mag === 0 || Math.abs(g.z || 0) / mag > 0.8) { setRoll(null); return; }
      // atan2 normalizzato a ±90°: dà lo stesso valore anche se il browser inverte i segni (iOS vs Android).
      let a = (Math.atan2(g.x, g.y) * 180) / Math.PI;
      if (a > 90) a -= 180;
      if (a < -90) a += 180;
      smooth = smooth == null ? a : smooth + (a - smooth) * 0.2;
      const now = performance.now();
      if (now - last > 80) { last = now; setRoll(smooth); }
    };

    window.addEventListener('devicemotion', onMotion);
    return () => window.removeEventListener('devicemotion', onMotion);
  }, [active]);

  return roll;
}
