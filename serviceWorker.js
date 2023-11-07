var url =  window.location.href;
var swLocation = '/misitio/serviceWorker.js'

if( navigator.serviceWorker) {
  if(url.includes('localhost')) {
    swLocation = '/serviceWorker.js';
  }
  navigator.serviceWorker.register( swlocation);
}

const staticDevCoffee = "calvo";
const assets = [
  "",
  "index.html",
  "css/style.css",
  "js/app.js",
  "images/3.jpg",
  "images/2.jpg",
  "images/1.jpeg"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
