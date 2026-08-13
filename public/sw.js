// A real service worker is one of the platform requirements for Chrome/Android
// to consider a site "installable" (offering the Add to Home Screen prompt) —
// this isn't decorative. It caches the static shell (not live booking data, which
// should always be fresh) so repeat opens from the home screen feel instant even
// on a weak connection.
const CACHE_NAME = "wosha-site-shell-v1";
const SHELL_ASSETS = ["/", "/manifest.json", "/icon-192.png", "/icon-512.png"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(SHELL_ASSETS)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n)))
    )
  );
  self.clients.claim();
});

// Network-first: always try to get the freshest page/data, only fall back to the
// cached shell if the network genuinely fails (e.g. no signal) — a booking site
// showing stale prices or hours would be worse than just being unavailable.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    fetch(event.request)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy)).catch(() => {});
        return res;
      })
      .catch(() => caches.match(event.request))
  );
});
