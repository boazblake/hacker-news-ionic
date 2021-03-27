/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "app.css",
    "revision": "6bd8932d6c224ad256e993e80d790618"
  },
  {
    "url": "app.css.map",
    "revision": "d5f7ede151ccaed962412c561bcc0322"
  },
  {
    "url": "app.js",
    "revision": "0a1b64ddda392db948ebcff5979d1272"
  },
  {
    "url": "app.js.map",
    "revision": "b5fc87555a39ee5c7bd1bd8964df5295"
  },
  {
    "url": "icons/android-icon-144x144.png",
    "revision": "bfcb3696b794480d9bfb2cf68580dbca"
  },
  {
    "url": "icons/android-icon-192x192.png",
    "revision": "6df0b092a744dea6390986ca6d4e89fa"
  },
  {
    "url": "icons/android-icon-36x36.png",
    "revision": "1fa5497c6fa727695cdebba603b898f1"
  },
  {
    "url": "icons/android-icon-48x48.png",
    "revision": "b8786baff3da042cfc275dc529e11f20"
  },
  {
    "url": "icons/android-icon-72x72.png",
    "revision": "03e32e31e39daacd607a15b3d852992f"
  },
  {
    "url": "icons/android-icon-96x96.png",
    "revision": "2b0867c802d767e15919ece808225814"
  },
  {
    "url": "icons/apple-icon-114x114.png",
    "revision": "b1f310b6d398cb596a0dfcb3314c64d2"
  },
  {
    "url": "icons/apple-icon-120x120.png",
    "revision": "4a18109ac9426056727eaf518148d1b1"
  },
  {
    "url": "icons/apple-icon-144x144.png",
    "revision": "bfcb3696b794480d9bfb2cf68580dbca"
  },
  {
    "url": "icons/apple-icon-152x152.png",
    "revision": "f0c85eca7c03f6bdb09555ac6f7d458d"
  },
  {
    "url": "icons/apple-icon-180x180.png",
    "revision": "8f88a440ab6ddde3b9240a6a5ac56d3c"
  },
  {
    "url": "icons/apple-icon-57x57.png",
    "revision": "05f219ca92a2e85dc86e332c58c7e7b2"
  },
  {
    "url": "icons/apple-icon-60x60.png",
    "revision": "27ed8b64814c14c1c1ca5c34c63a6ea3"
  },
  {
    "url": "icons/apple-icon-72x72.png",
    "revision": "03e32e31e39daacd607a15b3d852992f"
  },
  {
    "url": "icons/apple-icon-76x76.png",
    "revision": "0ecd017e4ce40772ac43018678d768ee"
  },
  {
    "url": "icons/apple-icon-precomposed.png",
    "revision": "4adf0c5bbf52a004819346050f198cea"
  },
  {
    "url": "icons/apple-icon.png",
    "revision": "4adf0c5bbf52a004819346050f198cea"
  },
  {
    "url": "icons/browserconfig.xml",
    "revision": "653d077300a12f09a69caeea7a8947f8"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "d5e5c78252d32b15013dcfdf3c09b5a6"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "75d3ed27f09a93400a9b6047e2c5feb2"
  },
  {
    "url": "icons/favicon-96x96.png",
    "revision": "2b0867c802d767e15919ece808225814"
  },
  {
    "url": "icons/favicon.ico",
    "revision": "5087fabbcde133d64b59f2edc74bfc89"
  },
  {
    "url": "icons/ms-icon-144x144.png",
    "revision": "bfcb3696b794480d9bfb2cf68580dbca"
  },
  {
    "url": "icons/ms-icon-150x150.png",
    "revision": "54f40c08010cd055cd000e58f00b0c5c"
  },
  {
    "url": "icons/ms-icon-310x310.png",
    "revision": "a5ea8c0481b567ebc1742e030b1b6f17"
  },
  {
    "url": "icons/ms-icon-70x70.png",
    "revision": "9f906a6c91830c3668a457ed7425ebbc"
  },
  {
    "url": "images/chevron-down-outline.svg",
    "revision": "57ffe1072417a6893e5f156fb8a1f8a1"
  },
  {
    "url": "images/chevron-up-outline.svg",
    "revision": "e6c7c29e31243004da4f04931df0e14b"
  },
  {
    "url": "images/favicon.png",
    "revision": "449a978b5aac92d1ef96b303b1ce6178"
  },
  {
    "url": "index.html",
    "revision": "a8282564ebcfaa83e71ccff41cb91171"
  },
  {
    "url": "manifest.json",
    "revision": "90b7b0915dd7da8a517cc8eb00eccc79"
  },
  {
    "url": "vendor.js",
    "revision": "35371c33565f4c7b28284940a27b7d6f"
  },
  {
    "url": "vendor.js.map",
    "revision": "313bb2fb1439cee413c27b686526b3f8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







