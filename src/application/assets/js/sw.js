importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');

if (workbox) {

    var networkFirstHandler = workbox.strategies.networkFirst({
        cacheName: 'default',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 10
            }),
            new workbox.cacheableResponse.Plugin({
                statuses: [200]
            })
        ]
    });

    const matcher = ({event}) => event.request.mode === 'navigate';
    const handler = (args) => networkFirstHandler.handle(args).then((response) => (!response) ? caches.match('/offline') : response);

    workbox.routing.registerRoute(matcher, handler);


    workbox.routing.registerRoute(
        // Cache CSS files
        /.*\.css/,
        // Use cache but update in the background ASAP
        workbox.strategies.staleWhileRevalidate({
            // Use a custom cache name
            cacheName: 'css-cache',
        })
    );

    workbox.routing.registerRoute(
        // Cache image files
        /.*\.(?:png|jpg|jpeg|svg|gif)/,
        // Use the cache if it's available
        workbox.strategies.cacheFirst({
            // Use a custom cache name
            cacheName: 'image-cache',
            plugins: [
                new workbox.expiration.Plugin({
                    // Cache only 20 images
                    maxEntries: 20,
                    // Cache for a maximum of a week
                    maxAgeSeconds: 7 * 24 * 60 * 60,
                })
            ],
        })
    );
} else {
    console.log(`Boo! Workbox didn't load 😬`);
}