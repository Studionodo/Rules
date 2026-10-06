// Service worker di Rules: app utilizzabile offline dopo la prima visita.
// Cambia VERSION a ogni rilascio per forzare l'aggiornamento della cache.
const VERSION = 'rules-v0.5.0';
const SHELL = ['/', '/index.html', '/manifest.webmanifest', '/favicon.svg',
  '/icons/icon-192.png', '/icons/icon-512.png'];

// Risorse pesanti e immutabili: prima la cache.
const CACHE_FIRST = ['/assets/', '/icons/'];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(VERSION).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Pagina: prima la rete (aggiornamenti), poi la cache (offline).
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => { const copy = res.clone(); caches.open(VERSION).then((c) => c.put('/index.html', copy)); return res; })
        .catch(() => caches.match('/index.html'))
    );
    return;
  }

  if (url.origin === self.location.origin && CACHE_FIRST.some((p) => url.pathname.startsWith(p))) {
    event.respondWith(
      caches.match(req).then((hit) => hit || fetch(req).then((res) => {
        if (res.ok) { const copy = res.clone(); caches.open(VERSION).then((c) => c.put(req, copy)); }
        return res;
      }))
    );
    return;
  }

});
