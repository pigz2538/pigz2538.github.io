/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/pigz2538.github.io/2020/05/01/HelloWorld/index.html","7e0e953fe31c4234c85f6c77a1cbc763"],["/pigz2538.github.io/2020/05/01/这里是下午鼓捣图床和编辑器的历程/index.html","b5d09db96ce16a764308d36661e00b1c"],["/pigz2538.github.io/2020/05/02/啊就这了/index.html","8d7c0750b0f7bcafca0d803dc4d1092f"],["/pigz2538.github.io/2020/05/02/换了个主题/index.html","65a27d8c52ddf3679d0cf1a5ee941bc6"],["/pigz2538.github.io/2020/05/04/Html-CSS启蒙/index.html","05f37140426c4c10782327a1b4ef22b5"],["/pigz2538.github.io/2020/05/04/首言/index.html","0537088ad674b4495e30566700ce8c07"],["/pigz2538.github.io/2020/05/06/从《后浪》谈起/index.html","b7e911e245d4d87653e9098e6e61df37"],["/pigz2538.github.io/2020/05/09/《共产党宣言》/index.html","3dee9ebf614203b333f8cfff187c6116"],["/pigz2538.github.io/about/index.html","97c5d9cb488f4f9dcc4df431b116f308"],["/pigz2538.github.io/archives/2020/05/index.html","914c0cf34f3d69d34c140d2c177a34c7"],["/pigz2538.github.io/archives/2020/index.html","43e431ff6957e34a7f81b41ebb75245d"],["/pigz2538.github.io/archives/index.html","30d3cc9c75eb61f79c7a5ae3ac0cd490"],["/pigz2538.github.io/categories/index.html","026b7b8765f38625bb2a4c593be96c64"],["/pigz2538.github.io/categories/收藏/index.html","30d19990843f2f61577bd2a48ebc04ef"],["/pigz2538.github.io/categories/文献/index.html","bffc1c1574bd05ee759c0ba9e09a18b6"],["/pigz2538.github.io/categories/网站历史/index.html","0047221ead898b3213655006df2f0b9f"],["/pigz2538.github.io/categories/随想录/index.html","958949269483cc24791bc787009acea5"],["/pigz2538.github.io/css/index.css","8b3fdff494eb3d12da103837814501fa"],["/pigz2538.github.io/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/pigz2538.github.io/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/pigz2538.github.io/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/pigz2538.github.io/img/avatar.png","6a2dbdcf4d079f45c0b60655e8da6ded"],["/pigz2538.github.io/img/favicon.png","abb19321150f6d3357cc2101ed3b84b0"],["/pigz2538.github.io/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/pigz2538.github.io/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/pigz2538.github.io/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/pigz2538.github.io/index.html","8fd0140becb83eec1f969147bf6e580f"],["/pigz2538.github.io/js/main.js","9ae2856869433ab1770b105c639b7710"],["/pigz2538.github.io/js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["/pigz2538.github.io/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["/pigz2538.github.io/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/pigz2538.github.io/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/pigz2538.github.io/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/pigz2538.github.io/js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["/pigz2538.github.io/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/pigz2538.github.io/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/pigz2538.github.io/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/pigz2538.github.io/js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["/pigz2538.github.io/js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["/pigz2538.github.io/link/index.html","0d4c54dff21365609b7ec105d8a74ca6"],["/pigz2538.github.io/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/pigz2538.github.io/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/pigz2538.github.io/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/pigz2538.github.io/messageboard/index.html","8cea90934faeb6e390d11e4c1354c317"],["/pigz2538.github.io/sw-register.js","2e16103c7b4c5ffe512a5fa9a2cffc63"],["/pigz2538.github.io/tags/CSS/index.html","6fe8086e96d2c2d5edf5e0afaf28c61e"],["/pigz2538.github.io/tags/Html/index.html","015beb51b07be918960b99bc788d51d9"],["/pigz2538.github.io/tags/index.html","5553339e1c7a2419adf64d5d71d44067"],["/pigz2538.github.io/tags/共产主义/index.html","50768c7e06f71e8c82086d4f06912950"],["/pigz2538.github.io/tags/历史/index.html","5db53e34dc9af0110468141ef8cf3c5c"],["/pigz2538.github.io/tags/学习/index.html","6eb905392aa2a06a3175afd14653ae8b"],["/pigz2538.github.io/tags/开始/index.html","96113d86bec0c183014683652c22f793"],["/pigz2538.github.io/tags/文献/index.html","47713e287577bea10cffbd61301654c0"],["/pigz2538.github.io/tags/网站推荐/index.html","9015c9959904e486d2bea461bb7ab055"],["/pigz2538.github.io/tags/观点/index.html","51f7dcce86ad1c5af1edc0daac2f77d9"],["/pigz2538.github.io/tags/随笔/index.html","6fc506d88164155b721a2c52de923432"]];
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
