importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
);

workbox.loadModule('workbox-background-sync');

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);
const { registerRoute } = workbox.routing;
const { CacheFirst, NetworkFirst, NetworkOnly } = workbox.strategies;
const { BackgroundSyncPlugin } = workbox.backgroundSync;

const cacheFirstNetwork = [
  'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
];

/* registerRoute(
  new RegExp(
    'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css'
  ),
  new CacheFirst()
);
 */
registerRoute(({ request, url }) => {
  if (cacheFirstNetwork.includes(url.href)) return true;
  return false;
}, new CacheFirst());

/* registerRoute(
  new RegExp('http://localhost:4001/api/events'),
  new NetworkFirst()
); */
const cacheNetworkFirst = ['/api/events'];

registerRoute(({ request, url }) => {
  if (cacheNetworkFirst.includes(url.pathname)) return true;
  return false;
}, new NetworkFirst());

const apiOfflineFallbacks = ['http://localhost:4001/api/auth/renew'];

self.addEventListener('fetch', (event) => {
  if (!apiOfflineFallbacks.includes(event.request.url)) return;
  const resp = fetch(event.request)
    .then((response) => {
      if (!response) {
        return caches.match(event.request);
      }
      // Guardar en caché la respuesta
      caches.open('cache-dynamic').then((cache) => {
        cache.put(event.request, response);
      });
      return response.clone();
    })
    .catch((err) => {
      console.log('offline response');
      return caches.match(event.request);
    });
  event.respondWith(resp.then());
});

// Posteos Offline

const bgSyncPlugin = new BackgroundSyncPlugin('posteos-offline', {
  maxRetentionTime: 24 * 60, // Retry for max of 24 Hours (specified in minutes)
});

registerRoute(
  new RegExp('http://localhost:4001/api/events'),
  new NetworkOnly({
    plugins: [bgSyncPlugin],
  }),
  'POST'
);
registerRoute(
  new RegExp('http://localhost:4001/api/events'),
  new NetworkOnly({
    plugins: [bgSyncPlugin],
  }),
  'PUT'
);
registerRoute(
  new RegExp('http://localhost:4001/api/events'),
  new NetworkOnly({
    plugins: [bgSyncPlugin],
  }),
  'DELETE'
);
