console.log("AUMI service worker is loaded");

// various events to listen for
const CACHE_NAME = 'offline';
const OFFLINE_URL = 'offline.html';
const FROOT = '/AUMI-o';
const FILES_TO_CACHE = [
        FROOT+'/Instruments/Toy Piano/48.mp3',
        FROOT+'/Instruments/Toy Piano/49.mp3',
        FROOT+'/Instruments/Toy Piano/50.mp3',
        FROOT+'/Instruments/Toy Piano/51.mp3',
        FROOT+'/Instruments/Toy Piano/52.mp3',
        FROOT+'/Instruments/Toy Piano/53.mp3',
        FROOT+'/Instruments/Toy Piano/54.mp3',
        FROOT+'/Instruments/Toy Piano/55.mp3',
        FROOT+'/Instruments/Toy Piano/56.mp3',
        FROOT+'/Instruments/Toy Piano/57.mp3',
        FROOT+'/Instruments/Toy Piano/58.mp3',
        FROOT+'/Instruments/Toy Piano/59.mp3',
        FROOT+'/Instruments/Toy Piano/60.mp3',
        FROOT+'/Instruments/Toy Piano/61.mp3',
        FROOT+'/Instruments/Toy Piano/62.mp3',
        FROOT+'/Instruments/Toy Piano/63.mp3',
        FROOT+'/Instruments/Toy Piano/64.mp3',
        FROOT+'/Instruments/Toy Piano/65.mp3',
        FROOT+'/Instruments/Toy Piano/66.mp3',
        FROOT+'/Instruments/Toy Piano/67.mp3',
        FROOT+'/Instruments/Toy Piano/68.mp3',
        FROOT+'/Instruments/Toy Piano/69.mp3',
        FROOT+'/Instruments/Toy Piano/70.mp3',
        FROOT+'/Instruments/Toy Piano/71.mp3',
        FROOT+'/Instruments/Toy Piano/72.mp3',
        
        FROOT+'/JS/JZZ.js',
        FROOT+'/JS/howler.js',
        FROOT+'/JS/webapp-helpers.js',
		FROOT+'/README.md',
		FROOT+'/index.html',
		FROOT+'/offline.html',
		FROOT+'/manifest.json',
		FROOT+'/switch.css',
		FROOT+'/aumiwebapp.css'
      ];
 
 
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
    	console.log("AUMI service worker is installing");

      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', function (event) {
  // do nothing here, just log all the network requests
  console.log(event.request.url);
  // could do this...
    event.respondWith(
    caches.match(event.request)
  );
  
});


// hmm other codes
/*
self.addEventListener('install', function(event) {
  console.log('[ServiceWorker] Install');
  
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    // Setting {cache: 'reload'} in the new request will ensure that the response
    // isn't fulfilled from the HTTP cache; i.e., it will be from the network.
    await cache.add(new Request(OFFLINE_URL, {cache: 'reload'}));
  })());
  
  self.skipWaiting();
});
*/

self.addEventListener('activate', (event) => {
  console.log('[ServiceWorker] Activate');
  event.waitUntil((async () => {
    // Enable navigation preload if it's supported.
    // See https://developers.google.com/web/updates/2017/02/navigation-preload
    if ('navigationPreload' in self.registration) {
      await self.registration.navigationPreload.enable();
    }
  })());

  // Tell the active service worker to take control of the page immediately.
  self.clients.claim();
});
/*
self.addEventListener('fetch', function(event) {
  // console.log('[Service Worker] Fetch', event.request.url);
  if (event.request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const preloadResponse = await event.preloadResponse;
        if (preloadResponse) {
          return preloadResponse;
        }

        const networkResponse = await fetch(event.request);
        return networkResponse;
      } catch (error) {
        console.log('[Service Worker] Fetch failed; returning offline page instead.', error);

        const cache = await caches.open(CACHE_NAME);
        const cachedResponse = await cache.match(OFFLINE_URL);
        return cachedResponse;
      }
    })());
  }
});
*/

