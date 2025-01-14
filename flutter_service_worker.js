'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "468260f0e42944c90c59558ed6e66b18",
"assets/AssetManifest.bin.json": "caf6a8fb6db659e86f259cd8e24615db",
"assets/AssetManifest.json": "34a1d2c410e281621f2802acf4d74219",
"assets/assets/files/Karim%2520Gaber%2520Flutter%2520Developer%2520CV.pdf": "ca1ffb23a971fe4dd2d2b7eb833175bd",
"assets/assets/fonts/Cairo/Cairo-Bold.ttf": "ad486798eb3ea4fda12b90464dd0cfcd",
"assets/assets/fonts/Cairo/Cairo-Light.ttf": "c4a2ada0dd57e03f921b8f7d45820268",
"assets/assets/fonts/Cairo/Cairo-Regular.ttf": "5ccd08939f634db387c40d6b4b0979c3",
"assets/assets/fonts/MaterialIcons-Regular.otf": "200a1d852fcd010ebfe71f6300025a1f",
"assets/assets/icons/android.svg": "21adcf318482abebd68c34d937d92af6",
"assets/assets/icons/apple.svg": "ee597c6de7e2151393e6136ea13005c3",
"assets/assets/icons/barbell.svg": "188c2392d551b376f06cf99578aec944",
"assets/assets/icons/book.svg": "828599dc7886c171a008d0d8ede6ac91",
"assets/assets/icons/briefcase.svg": "242da72785b69cf07813995246160c8e",
"assets/assets/icons/call.svg": "139c748540ba7e4f86886089dece09f7",
"assets/assets/icons/home.svg": "c70080e69060dd63e8c02776e2c920e2",
"assets/assets/icons/laptop-outline.svg": "d0a39cf93ebbfe0a717497d10c7791cb",
"assets/assets/icons/logo-github.svg": "77b7892864c4bff358ac48be5666db44",
"assets/assets/icons/logo-linkedin.svg": "63e2027ad3ec33d2394f10c8eafa4223",
"assets/assets/icons/logo-whatsapp.svg": "7dd9357eb09275cea0bad4576d427406",
"assets/assets/icons/moon.svg": "bab0793bea5cee36831785d59fb16e74",
"assets/assets/icons/person.svg": "dd98ebe1becdfffa38f6afce0fdd65d5",
"assets/assets/icons/sunny.svg": "5c90937f84ea76b0c9feb91cb6ed64f2",
"assets/assets/images/png/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/png/home_img.png": "8ff0d2f20496863a3e67a7e51f26ecf4",
"assets/assets/images/png/who_i_am_pic.png": "ae434b0dba6c48f6649d7c8ec601893c",
"assets/FontManifest.json": "0cddc52c133b0737da461c23427c4026",
"assets/fonts/MaterialIcons-Regular.otf": "3939ce0f8e2298bee64588334c9be130",
"assets/NOTICES": "13a8ccfd3431481d67d4255cfd2f7f40",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "f3f4410553f18d08a08f62943a4018d1",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/android-icon-144x144.png": "60b8aff46257f557c2dac56412e6835a",
"icons/android-icon-192x192.png": "2cece4ffb7e7e89440db0436525a8452",
"icons/android-icon-36x36.png": "0ad77ca59c3606dbcb01844f84740f99",
"icons/android-icon-48x48.png": "82f720212a5edb2a8c2f73310a05ccf8",
"icons/android-icon-72x72.png": "89a105cdb56d981860036fbb41967cd8",
"icons/android-icon-96x96.png": "ad6b8d66512622f67aad6c744681425e",
"icons/apple-icon-114x114.png": "32f40425ce17740702e2a43b63541674",
"icons/apple-icon-120x120.png": "263b3c84b50e764516f9d744c6a16d89",
"icons/apple-icon-144x144.png": "59bb085182d6fb0eea3bfb3164480ef7",
"icons/apple-icon-152x152.png": "fa27bc37d3ef1782f06162e6da6a7964",
"icons/apple-icon-180x180.png": "db2d9247b67eddc8a6c0cbe2d4284bb2",
"icons/apple-icon-57x57.png": "d0d64d73c04bc36eb960ae11fa73be0c",
"icons/apple-icon-60x60.png": "9a8f37f0efa2806d36121e95e7404eb4",
"icons/apple-icon-72x72.png": "6211d7a92b62e49f1877c4bf833de97e",
"icons/apple-icon-76x76.png": "4ab3ac9151b8e68d2c7320e20570901a",
"icons/apple-icon-precomposed.png": "d20992463ca4d6c4bf65a35b2ecdb804",
"icons/apple-icon.png": "d20992463ca4d6c4bf65a35b2ecdb804",
"icons/browserconfig.xml": "97775b1fd3b6e6c13fc719c2c7dd0ffe",
"icons/favicon-16x16.png": "d66d508595e4f9b77aa2281d0a8104da",
"icons/favicon-32x32.png": "957c6dd729c2fc74d4a2e3978cc6cd93",
"icons/favicon-96x96.png": "02f843857002b459acf8805ab4549340",
"icons/favicon.ico": "2c28bdb77b86a24bdcea48a3a79db005",
"icons/manifest.json": "e50e6a1c9ed6452635d3211f39501e0d",
"icons/ms-icon-144x144.png": "59bb085182d6fb0eea3bfb3164480ef7",
"icons/ms-icon-150x150.png": "df242d141d298af8c01fd0727d7ca644",
"icons/ms-icon-310x310.png": "b85cd525573c0c8b96fef86bce3af23a",
"icons/ms-icon-70x70.png": "b155408fe67b92c348abd9344db49d76",
"index.html": "6dc391ea922418b146086ba1468a9605",
"/": "6dc391ea922418b146086ba1468a9605",
"main.dart.js": "3d2aee739e1f1bf55e05f591927508fa",
"manifest.json": "1029c17519c33c4b91ba433abea8cf41",
"version.json": "1b91f299394cac49451d77353326bf85"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
