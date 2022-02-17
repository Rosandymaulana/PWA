const staticCache = 'static-cache';
const assets = [
    '/',
    '/index.html',
    '/js/app.js',
    '/js/materialize.min.js',
    '/css/styles.css',
    'https://fonts.googleapis.com/icon?family=Material+Icons'
]
//install prosess
self.addEventListener('install', e => {
    e.waitUltil(
        caches.open(staticCache).then(cache => {
            cache.addAll(assets)
        })
    )
})

//activated proses
self.addEventListener('activate,', e => {
    console.log("sw is activation")
})

self.addEventListener('fetch', e => {
    e.responWith(
        caches.match(e.request).then(res => {
            return res || fetch(e.request)
        })
    )
})