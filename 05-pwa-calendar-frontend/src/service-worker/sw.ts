/// <reference lib="webworker" />
declare const self: ServiceWorkerGlobalScope;

import { ExpirationPlugin } from 'workbox-expiration';
import { createHandlerBoundToURL, precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

precacheAndRoute(self.__WB_MANIFEST || []);

registerRoute(
  ({ request }) => request.mode === 'navigate',
  createHandlerBoundToURL('/index.html')
);

registerRoute(
  ({ url }) => url.origin === 'https://i.ytimg.com',
  new StaleWhileRevalidate({
    cacheName: 'yt-thumbnails',
    plugins: [new ExpirationPlugin({ maxEntries: 50 })],
  })
);

self.addEventListener('install', async (event) => {
  const cache = await caches.open('cache-1');
  await cache.addAll([
    'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  ]);
});
self.addEventListener('activate', () => self.clients.claim());

const apiOfflineFallbacks = [
  'http://localhost:4001/api/auth/renew',
  'http://localhost:4001/api/events',
];

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
