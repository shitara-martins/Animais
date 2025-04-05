const CACHE_NAME = "educacional-v1";
const urlsToCache = [
  "index.html",
  "back.png",
  "gato.png",
  "letra.png",
  "carlos.png",
  "estuda.png",
  "sabe.png",
  "aprende.png",
  "conhece.png",
  "Bouncy.otf",
  "manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
