const VERSION = "v1";

self.addEventListener('install', event => {
  event.waitUntil(precache());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  
  // get
  if (request.method !== "GET") {
    return;
  }

  // Buscar en caché
  event.respondWith(cachedResponse(request));
  event.waitUntil(updateCache(request));

});

// Retorna una promesa {es lo que espera waitUntil()}
async function precache() {
  const cache = await caches.open(VERSION);
  cache.addAll([
    '/',
    '/index.html',
    '/assets/video/BigBuckBunny.mp4',
    '/src/index.css',
    '/src/index.js',
    '/src/MediaPlayer.js',
    '/src/plugins/AutoPause.js',
    '/src/plugins/AutoPlay.js'
  ]);
}


async function cachedResponse(request) {
  const cache = await caches.open(VERSION);
  const response = await cache.match(request);
  return response || fetch(request);
}


async function updateCache(request) {
  const cache = await caches.open(VERSION);
  const response = await fetch(request);
  return cache.put(request, response);
}