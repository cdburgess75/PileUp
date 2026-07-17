const CACHE = "pileup-2026.07.16.002";
const SHELL = [
  "/PileUp/",
  "/PileUp/index.html",
  "/PileUp/icons/icon.svg",
  "/PileUp/icons/apple-touch-icon.png",
  "/PileUp/icons/icon-192.png",
  "/PileUp/icons/icon-512.png",
  "/PileUp/manifest.webmanifest"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)));
});

// The page shows an update banner and posts SKIP_WAITING when the user
// authorizes the update; only then does the new worker take over.
self.addEventListener("message", e => {
  if (e.data && e.data.type === "SKIP_WAITING") self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return;
  e.respondWith(
    caches.match(e.request).then(cached => {
      const network = fetch(e.request).then(res => {
        if (res.ok) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      }).catch(() => cached);
      return cached || network;
    })
  );
});
