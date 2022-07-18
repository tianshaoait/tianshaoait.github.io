'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "6a533cda7d273051ce550ef13f1b6f42",
"assets/FontManifest.json": "49f2c67733a151b7dd0023aaea08fa3e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/SourceHanSansCN-Bold.ttf": "deb8c545f6d693dbac1e4555e75c828c",
"assets/fonts/SourceHanSansCN-ExtraLight.ttf": "daf00ca6691141c1508ef912397947f4",
"assets/fonts/SourceHanSansCN-Heavy.ttf": "69ae9ec7a0c5ce2f9fd76a8aa560d34d",
"assets/fonts/SourceHanSansCN-Light.ttf": "f740729e449112d73fed460784acd72a",
"assets/fonts/SourceHanSansCN-Medium.ttf": "e09a73b279b95287eba09b6ae7ae63d1",
"assets/fonts/SourceHanSansCN-Normal.ttf": "21306baabd630fd8e31a31ccc751796c",
"assets/fonts/SourceHanSansCN-Regular.ttf": "d8c1a5fd05441950b0ff1aac77626858",
"assets/images/add_icon.png": "d8b0a18138298e21e1a1787a1ff6cb93",
"assets/images/app_loading.png": "f5cb6a33aee435c7950e5db5721544a0",
"assets/images/arralistIcon1.png": "4ff052112b892be7843f631f61a4e8fe",
"assets/images/auth.png": "97281ed834f201b9b518d6997a8be1a6",
"assets/images/back_bai2.png": "d2458e91aff0603b2d1d2f135cdf0976",
"assets/images/close2.png": "fda65d451fe05435ad14a7dd7bd21177",
"assets/images/closeIcon.png": "95ddf91c570d10803e893c14babe71cd",
"assets/images/contantIcon1.png": "bf9cc8b88a286369ae03ab25ccfbcda7",
"assets/images/copyIcon.png": "d950fc5379d6efd5f78a941757101226",
"assets/images/ethIcon.png": "4ac7defc6d725014044213404b07f671",
"assets/images/exportIcon.png": "f2d213ade474de949a59f10cf04626a8",
"assets/images/exprolIcon.png": "480031dfe11d4445da760770f00b94a5",
"assets/images/home_hot.png": "173f409c6dd86d4195add43b88244fc6",
"assets/images/home_more.png": "4351da0edce7407bb423b02a8dfdcd88",
"assets/images/home_time.png": "76b11ab031e76d0af85459fe829f1c5e",
"assets/images/inIcon1.png": "8bf61c33e9aabd29741fb0bf85b08c91",
"assets/images/inIcon2.png": "5d94bf92ceaf31c32bbbdf53a34dd615",
"assets/images/leftArr.png": "f3ceb74d5326f98484e7dccea6774743",
"assets/images/likeIcon.png": "efa138e1402c36f0552bbd23718e2762",
"assets/images/logo.png": "ce32c293a6b7f3ea648b9406d5376e39",
"assets/images/main_page_item_home1.png": "4a609c2ef07652f0885290771cde6b7e",
"assets/images/main_page_item_home2.png": "8068542c05f25c829660390ec9f164e1",
"assets/images/main_page_item_museum1.png": "6a2d026af1f76bb8dcf700e2481233db",
"assets/images/main_page_item_museum2.png": "8b2272ee469c32adab9d796568687c0f",
"assets/images/main_page_item_my1.png": "339cef80eddf8bfaad958d002adec9bd",
"assets/images/main_page_item_my2.png": "573bb4f029eeb20c12c9bc31ca1153b4",
"assets/images/main_page_item_special1.png": "1ec0ac456e916aa11a53a54c3c7514cd",
"assets/images/main_page_item_special2.png": "a5594675faef32fc349ccb6107d2c49f",
"assets/images/message.png": "7005beeda5dbb30e843f48a7669c1488",
"assets/images/my_bg.png": "bbc0e0216383d0ae2a2623bd839b96c6",
"assets/images/onlineServer.png": "c6e35f9f37342fc96f4db4c51a364bf1",
"assets/images/orderIcon.png": "a2939339abef27a9d6a8bf3b4903e0b0",
"assets/images/other.png": "fc2c6271496be3d6d41ef8dc672ca5ce",
"assets/images/password2.png": "42d06a9a547d04b3e6b634c76fe33640",
"assets/images/passwordIcon.png": "6f797269b55fd8e0b07d0baab2ce76b6",
"assets/images/phoneIcon.png": "4e323038770fdca4a3ca67c9c4aa1109",
"assets/images/photo.png": "5ab1cfed88a4c02c402785d62ced7de3",
"assets/images/rechargeIcon.png": "5cf1c92c16ba6fb30d5af00b586c1ee5",
"assets/images/ref_img.png": "956c59ad3570107e3695cf3fde410f1f",
"assets/images/saveLocalimg.png": "75fc10eeb37ff00c3211455b5f298104",
"assets/images/scanicon.png": "dca35df755b35d5b5dd97ff3108181f9",
"assets/images/select1.png": "1684bff40377d12416a62e77abcfa681",
"assets/images/select2.png": "60f84c3d625d98b55ac7f6ad22bffd05",
"assets/images/sellIcon.png": "60029260d5f6c8865b8385da888f3644",
"assets/images/send_img.png": "aeb05f82a6c145fd131c475a3a63b2e0",
"assets/images/setIcon.png": "82ce1702c6daec154672fa7f8cfedf26",
"assets/images/share.png": "1990218ba875dfd2f11928df83ef9602",
"assets/images/shcareIcon.png": "6142affee7ecf146a932c5419113a383",
"assets/images/srche.png": "400a3c6236e46f16375c3e2c3ca05b2b",
"assets/images/sub_icon.png": "c57d06719f507adffc684bb40faad24e",
"assets/images/userMainButIcon1.png": "7d8d849537c57713bfea4f915394123e",
"assets/images/userMainButIcon2.png": "3c43b2830efbdd9a58361cfef74f74ab",
"assets/images/userMainButIcon3.png": "be96e0fd6922a563ffba6cf3fe6c05b7",
"assets/images/userMenuIcon1.png": "f66119051647cf99f9b616daa6b1bb16",
"assets/images/userMenuIcon2.png": "55b4bf956fb9ae49e3e742b2662e56d3",
"assets/images/userMenuIcon3.png": "20d7b604a9419737fb625fc3f0c7febc",
"assets/images/vipbg.png": "955f9dc8bb2825494120b168be2c7811",
"assets/images/wechat.png": "3bdef6a152451eb1e9d9f8b978d6c72b",
"assets/NOTICES": "e456f8b6b86a89892f1a24c8afc07980",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/lib_common/images/app_loading.png": "f5cb6a33aee435c7950e5db5721544a0",
"assets/shaders/ink_sparkle.frag": "a8796498eec43c2de64cc6515b4de1ef",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/loading.gif": "950265cdf65d152bf3c7d8bb87b2a117",
"index.html": "4983b8d24d258904755a1b602212b9de",
"/": "4983b8d24d258904755a1b602212b9de",
"jsQR.js": "06c4d5a0dd8975a781f089e8b308e5b8",
"main.dart.js": "af108f3f73610f527ea09cf941041893",
"manifest.json": "3614b051a185cb9196eca9b8a9127507",
"version.json": "dda4301f0ad11ad3b9dd2f06f10fa83f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
