/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/pigz2538.github.io/2020/05/01/HelloWorld/index.html","35f246abd21b12fafb7a44c15119e833"],["/pigz2538.github.io/2020/05/01/这里是下午鼓捣图床和编辑器的历程/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/pigz2538.github.io/2020/05/02/换了个主题/index.html","952d97f436a02fd8bc3f1fd925d9cdc4"],["/pigz2538.github.io/about/index-1.html","e57cacde48df829981c2ad7e135c0c94"],["/pigz2538.github.io/about/index.html","2f58ffe25cefde2f2962a55f8cc19f8c"],["/pigz2538.github.io/archives/2020/05/index.html","72157f78cef8a97cadb65cfcc312f335"],["/pigz2538.github.io/archives/2020/index.html","d17164282f18e5bdddcf9708bb355c2c"],["/pigz2538.github.io/archives/index.html","47fcec56908bb4fb661f13c7cccf77ed"],["/pigz2538.github.io/categories/index.html","54ff4c358dbc289573edbbb1d7436fd4"],["/pigz2538.github.io/css/index.css","b480fe8437df2070357b2eff00755567"],["/pigz2538.github.io/css/var.css","7269f3c67daa4ce386c48a22dc081b8b"],["/pigz2538.github.io/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/pigz2538.github.io/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/pigz2538.github.io/img/avatar.png","6a2dbdcf4d079f45c0b60655e8da6ded"],["/pigz2538.github.io/img/favicon.png","abb19321150f6d3357cc2101ed3b84b0"],["/pigz2538.github.io/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/pigz2538.github.io/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/pigz2538.github.io/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/pigz2538.github.io/index.html","ac2f02558887a37162caf4ce15abd579"],["/pigz2538.github.io/js/main.js","d41d8cd98f00b204e9800998ecf8427e"],["/pigz2538.github.io/js/search/algolia.js","44b8b61c0d84627aea191ea80b723070"],["/pigz2538.github.io/js/search/local-search.js","28317edfd1c61b24e88e2b753b721423"],["/pigz2538.github.io/js/third-party/ClickShowText.js","492cbd6583385caab3be0c0f00001f46"],["/pigz2538.github.io/js/third-party/activate-power-mode.js","c862db786144a8ed6ab833a2ff007630"],["/pigz2538.github.io/js/third-party/canvas-nest.js","d395aad50dda0240846b6684172b65ef"],["/pigz2538.github.io/js/third-party/canvas-ribbon.js","3bfb418467a8187106b3be45e54adef2"],["/pigz2538.github.io/js/third-party/click_heart.js","133300efc21c167202defaf39daa8ec9"],["/pigz2538.github.io/js/third-party/fireworks.js","0c2a1695feb134c674db4e310f50af0b"],["/pigz2538.github.io/js/third-party/piao.js","2dd6d40e8833a490afbcda7751a31d78"],["/pigz2538.github.io/js/tw_cn.js","2881352b9b515075a45d2b69d5039bcd"],["/pigz2538.github.io/js/utils.js","af557c7104f86cd96ad99392d2bdc199"],["/pigz2538.github.io/link/index.html","63354f4371e05cf899a7cb7d3b821819"],["/pigz2538.github.io/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/pigz2538.github.io/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/pigz2538.github.io/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/pigz2538.github.io/messageboard/index.html","69c57a8399992dd6be740ce9562d95be"],["/pigz2538.github.io/sw-register.js","87d9c74fdd79ca804b86566f22670a1b"],["/pigz2538.github.io/tags/index.html","73f91f85634b0f57e09858e538b611c2"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
