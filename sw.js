/* console.log('SW registered again!');
 const cacheCurrent = 'rest-v1';

//items to be cached
const cacheFiles = [
  '/',
  '/index.html',
  '/restaurant.html',
  '/js/dbhelper.js',
  '/js/main.js',
  '/js/restaurant_info.js',
  '/data/restaurants.json',
  '/img/1.jpg',
  '/img/2.jpg',
  '/img/3.jpg',
  '/img/4.jpg',
  '/img/5.jpg',
  '/img/6.jpg',
  '/img/7.jpg',
  '/img/8.jpg',
  '/img/9.jpg',
  '/img/10.jpg',
  '/css/styles.css'
]
//add files to cache on install
self.addEventListener('install', function(event) {

event.waitUntil(
  caches.open('cacheCurrent').then(function(cache) {
    console.log('opened cache');
    return cache.addAll(cacheFiles);
  })
);
});

//check if files are in the cache and fetch them if not.
/*self.addEventListener('fetch', function(event) {
  console.log('fetching...');
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if(response){
        console.log('got response');
        return response
      } else {
        console.log('getting request and adding to cache...');
        return fetch(event.request)
        .then(function(response) {
          const responseClone = response.clone();
          caches.open('rest-v1').then(function(cache) {
            cache.put(event.request, responseClone);
          })
          return response;
          })
          .catch(function(err) {
            console.log(err);
});
}
}));
});
*/
/*
self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
*/
