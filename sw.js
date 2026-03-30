const CACHE_NAME = 'agente-saude-v2';
const urlsToCache = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './data.js',
  './LeiOraganicaIracemapolis.js',
  './icon.png',
  './manifest.json'
];

// Instala o service worker e salva no cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Intercepta as requisições para devolver do cache se estiver offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Retorna do cache se encontrou, senão busca na rede
        return response || fetch(event.request);
      })
  );
});
