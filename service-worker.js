const cacheName = 'my-app-cache';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        'index.html',
        '/css/styles.css',
        '/css/normalize.css',
        '/js/elementsDOM.js',
        '/js/carteira.js',
        '/js/contasTabela.js',
        '/js/donativos.js',
        '/js/gastos.js',
        '/js/index.js',
        '/js/s30.js'
      ]);
    }).catch(error =>{
        console.error('Falha ao armazenar em cache recursos:', error)
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
