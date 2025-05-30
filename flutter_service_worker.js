'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "20dffbece150ea786096c0657ce9ffba",
"version.json": "f5e2dc75288e109bd806bf4d2250ff47",
"index.html": "b7ec06587dcbe3fe28faa28157e7fe98",
"/": "b7ec06587dcbe3fe28faa28157e7fe98",
"main.dart.js": "9e5172e7a58ddf9cf7693e943a5e1533",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "35ca055343ad67be5f438e09eb58e675",
".git/config": "ac76a4bcc145a7bef1bf179cadcd2a9c",
".git/objects/0c/70ac676dd0f19f8356790c1ae391443bb9ba29": "9fa0bbe675c041c7dcc77654f1dd584d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/72/cdc33ad78169ed970d2ebc387fb71267c5b87d": "c086be189678a93e9d99b84909fa6070",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/c6e16f647fb100e2f2b9b5fe8e9f64c8e21b6a": "7761f5b3bd2a5b69d6c52c63b27353c9",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/2d/329f47bd67f8a60a4ec38c1ab8781d3248496a": "071533ddd337d8876244f34044f1d350",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a57b2921d7ee778b6683537e2438a2dd",
".git/logs/refs/heads/main": "93170d6369b6a2e8f06935073bfb94f6",
".git/logs/refs/remotes/origin/main": "6c620a3ad40f0b1e6d4552d9f5db2cf4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "bbf6f56f972d09af23c336a4641fe9f1",
".git/refs/remotes/origin/main": "bbf6f56f972d09af23c336a4641fe9f1",
".git/index": "e412c72d9fe4d88e9e8404fdd7abf643",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "6d83cfacfb8c75ba27d883c22048910f",
"assets/NOTICES": "ec062feef1a4ad2a284d8f2c994555f7",
"assets/FontManifest.json": "a1991712fb4dc3011ce31447e4032180",
"assets/AssetManifest.bin.json": "17909dc33d062392a8d06913474a3379",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "07392abdbee2664e8afcce0765441cfb",
"assets/fonts/MaterialIcons-Regular.otf": "a8c26b7918408d75d46f00b12c382fd5",
"assets/assets/images/moment.png": "f8c37b8b4a0a14a046fc746c9e631782",
"assets/assets/images/cloths.png": "a4a7bfced2528edba9d650ab3ce304fc",
"assets/assets/images/men.png": "94df4ad3366401d17db8cd1a460b08d1",
"assets/assets/images/women.png": "f42ea1e8847df39fb3dac92a44f15d54",
"assets/assets/images/style1.png": "c6af0ea8789dd3d18e0741c39a7e0cb8",
"assets/assets/images/logo.png": "8e1c4b0918661342929f623f257747fd",
"assets/assets/images/shoes.png": "8da48656fcda7bba78dcbe9fcef287be",
"assets/assets/images/necklace.png": "cc79d85e662a533477741031f1d4f193",
"assets/assets/images/smart_watch.png": "92a73b50a646a2376b766cad89078190",
"assets/assets/images/product_main.jpg": "1c957b11b1b41ac886ab966f278ea503",
"assets/assets/images/camera.png": "ea20b14ab026aabfc2ede797e34546a0",
"assets/assets/icons/nav2.png": "e31fd65357d5b619211621807035abbd",
"assets/assets/icons/nav3.png": "85da4cd2d0e034f11a651a9a7f2d3c55",
"assets/assets/icons/nav1.png": "9e479b0bcc69d4a524218679fae06a3e",
"assets/assets/icons/add_to_bag.png": "5eb0ebc31ebb8a2620cbe36a26730680",
"assets/assets/icons/nav4.png": "5e1b04d8539f7a12f92b0568e999762c",
"assets/assets/icons/nav5.png": "38f7ec1f73c36f18ec7b35fd99f60b6f",
"assets/assets/icons/return_icon.png": "5ae532f7ebe8485c01d51711173f76e5",
"assets/assets/icons/avatar.png": "3dc2230fab2414365ea9dff44fdfcdb9",
"assets/assets/icons/avatar2.png": "db27e74a7928c6cadf07fb95268b6cc8",
"assets/assets/icons/buy_now.png": "7e8044174af62539307edb13ad5a9b33",
"assets/assets/icons/profile4.png": "1864dac1b5dd571bf0333989eb08a9fb",
"assets/assets/icons/profile5.png": "7012cb7ee6eed46978c2c1d7c76df02c",
"assets/assets/icons/profile6.png": "1554ceb72a2a03d6fdac20074a274c9e",
"assets/assets/icons/profile2.png": "8dc786425962c822c0413f2134f3fd36",
"assets/assets/icons/profile3.png": "10730a93923e5fd6c48a3b174d61a938",
"assets/assets/icons/profile1.png": "4cb599ec94dfbf239fbc626d3269c2a0",
"assets/assets/icons/cashicon.png": "543919d1e25a66a4b19227fe64ad4ee3",
"assets/assets/fonts/LibreCaslonTextRegular.ttf": "12db28e47b5670ec98909bc030d72530",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
