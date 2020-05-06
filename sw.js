/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/pigz2538.github.io/2020/05/01/HelloWorld/index.html","35feec97198d79ca6e8ef6e8add6a540"],["/pigz2538.github.io/2020/05/01/这里是下午鼓捣图床和编辑器的历程/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/pigz2538.github.io/2020/05/02/啊就这了/index.html","ec478034b322355c84a65a2d6554d24a"],["/pigz2538.github.io/2020/05/02/换了个主题/index.html","6b264c2141c456081ae9aae84a74f212"],["/pigz2538.github.io/2020/05/04/Html-CSS启蒙/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/pigz2538.github.io/2020/05/04/首言/index.html","d701f2f8d4f983f1a8853101eab2f5fd"],["/pigz2538.github.io/2020/05/06/从《后浪》谈起/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/pigz2538.github.io/about/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/pigz2538.github.io/archives/2020/05/index.html","a208085dfa81e76c2a3d147aa633d6cf"],["/pigz2538.github.io/archives/2020/index.html","f22756314ce4992ec203526d8a46a2c5"],["/pigz2538.github.io/archives/index.html","c9f3b5b29ce97e5aa81d37ad470f2614"],["/pigz2538.github.io/categories/index.html","79a3924ee78a270b2d52550e855bb2a1"],["/pigz2538.github.io/categories/收藏/index.html","aabbeb55cd3bcae4afc92fe9c7779031"],["/pigz2538.github.io/categories/网站历史/index.html","875d8bc287de8d3120507182d65064a5"],["/pigz2538.github.io/categories/随想录/index.html","48fc7c99010ed53bf53fb74f04b83c83"],["/pigz2538.github.io/css/index.css","2afd57815ff7665582d5bae8fc4c9be9"],["/pigz2538.github.io/css/var.css","eeaf034faa6d9d3b2422803c73f7bd3e"],["/pigz2538.github.io/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/pigz2538.github.io/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/pigz2538.github.io/img/avatar.png","6a2dbdcf4d079f45c0b60655e8da6ded"],["/pigz2538.github.io/img/favicon.png","abb19321150f6d3357cc2101ed3b84b0"],["/pigz2538.github.io/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/pigz2538.github.io/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/pigz2538.github.io/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/pigz2538.github.io/index.html","2320e4618f2e074b3cf024a26522f31d"],["/pigz2538.github.io/js/main.js","d41d8cd98f00b204e9800998ecf8427e"],["/pigz2538.github.io/js/search/algolia.js","a13c8283501e2885148466ad7d038024"],["/pigz2538.github.io/js/search/local-search.js","c69802161735a65b1ec90030e0b7b403"],["/pigz2538.github.io/js/third-party/ClickShowText.js","b3391b074a65e5f71483f96959cb0e55"],["/pigz2538.github.io/js/third-party/activate-power-mode.js","75dcd88fc285e5a58e8cddf643d75336"],["/pigz2538.github.io/js/third-party/canvas-nest.js","f293a125c1a27b2555fbdc735c1da854"],["/pigz2538.github.io/js/third-party/canvas-ribbon.js","c096c07c376f956698cb0b3db0d369d5"],["/pigz2538.github.io/js/third-party/click_heart.js","a46db06769107ee39677fce8c9edd71c"],["/pigz2538.github.io/js/third-party/fireworks.js","24f414782c68a1d8e14d27b61d10d3b9"],["/pigz2538.github.io/js/third-party/piao.js","0897518d420291f2e380d3fb09e95f7a"],["/pigz2538.github.io/js/tw_cn.js","5e7a885bbdaf92d1726eb557591a1cef"],["/pigz2538.github.io/js/utils.js","f58d15b798ac6beede580aa6259c450b"],["/pigz2538.github.io/link/index.html","b3f025adff1f91605ca20bb51c2bf943"],["/pigz2538.github.io/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/pigz2538.github.io/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/pigz2538.github.io/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/pigz2538.github.io/messageboard/index.html","95c4b6dc19db4c591d8d520916f271a1"],["/pigz2538.github.io/sw-register.js","d588742c15f984d6674a26842a03b88a"],["/pigz2538.github.io/tags/CSS/index.html","4e60d4094495418e6fa2c10c3e45cba8"],["/pigz2538.github.io/tags/Html/index.html","6acd42c7d63361abe3ab82abc513c7ee"],["/pigz2538.github.io/tags/index.html","d6b924f3d502e89f9ae5825bbf9b1932"],["/pigz2538.github.io/tags/历史/index.html","4acc1f29a354d1ac27d3e6307690edf0"],["/pigz2538.github.io/tags/学习/index.html","98462f375c5f0dee6de6a6af7b8fef1c"],["/pigz2538.github.io/tags/开始/index.html","11241bb36665213d37e761c45c452c15"],["/pigz2538.github.io/tags/网站推荐/index.html","0660473a72e0fe99eb7376dbaf881803"],["/pigz2538.github.io/tags/观点/index.html","60dab1a15729d035e788f4c2348f4f86"],["/pigz2538.github.io/tags/随笔/index.html","914f7fd9823ce41b2d24ea48a972fea6"]];
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
