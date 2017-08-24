var CACHE_NAME = 'magic-mirror-cache-v7';
var urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/magic-mirror.js',
  '/custom-header.js',
  '/icons/ic_camera_enhance_black_48dp_2x.png'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// https://github.com/jakearchibald/simple-serviceworker-tutorial/blob/gh-pages/sw.js
// The fetch event happens for the page request with the
// ServiceWorker's scope, and any request made within that
// page
self.addEventListener('fetch', function(event) {
  // Calling event.respondWith means we're in charge
  // of providing the response. We pass in a promise
  // that resolves with a response object
  event.respondWith(
    // First we look for something in the caches that
    // matches the request
    caches.match(event.request).then(function(response) {
      // If we get something, we return it, otherwise
      // it's null, and we'll pass the request to
      // fetch, which will use the network.
      return response || fetch(event.request);
    })
  );
});

