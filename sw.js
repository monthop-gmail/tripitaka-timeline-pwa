const CACHE_NAME = 'tripitaka-v2';
const BASE = '/tripitaka-pwa/';
const urlsToCache = [BASE, BASE + 'index.html', BASE + 'manifest.json', BASE + 'timeline.html'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
