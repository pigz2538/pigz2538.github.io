/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/05/01/HelloWorld/index.html","15c61842a170f9df09983e0a35a84bb5"],["/2020/05/01/这里是下午鼓捣图床和编辑器的历程/index.html","8b60198675c1b508851975d48cb5dd8c"],["/2020/05/02/啊就这了/index.html","9d7ccd742d9ba6fc650df2e3817d51bb"],["/2020/05/02/换了个主题/index.html","2b1feed57d5ba4b970b8babf3d7ad8e6"],["/2020/05/04/Html-CSS启蒙/index.html","207057d02e7a820ce1757b9546d0a3d5"],["/2020/05/04/前言/index.html","3377ed197199dd25e5b92f9c9cb4e049"],["/2020/05/06/从《后浪》谈起/index.html","e7a11040fbd97624c427157940e716fe"],["/2020/05/09/《共产党宣言》/index.html","44ed33d0f2aa627595de518c05e6e771"],["/2020/05/10/博客部署到Coding/index.html","f6b3a8275c279a3c08e021f8cd9da057"],["/2020/05/10/转载：中国的基尼系数是多少？/index.html","c2c19324d1fb04eb03445a62dd7d79cb"],["/2020/05/17/生物边缘知识点/index.html","4d04ccb77e57ea757c21568bec79096f"],["/2020/05/23/《对自己的探讨》/index.html","eeef5a2ca36db52665a205c74686eb69"],["/2020/06/20/寻找生活的节奏/index.html","c1a481cd8d6806c17bd63c326717a604"],["/2021/06/10/重新出发！！！/index.html","59c0fac077c3500d30cb8ea30b77556b"],["/about/index.html","5332d4335b0fd83d44cfdd17d5b3c7b5"],["/archives/2020/05/index.html","ee943f94572c5e73c7df04bf31ec9a2c"],["/archives/2020/05/page/2/index.html","35a9eb391be5b080160ecbe267519cd7"],["/archives/2020/06/index.html","4e254b929e5e557e1599710b56a7d193"],["/archives/2020/index.html","d4b6b364b79f04193c15b3f9b2b02ec5"],["/archives/2020/page/2/index.html","c1b6596fb9e1c29b68ede906da837a1d"],["/archives/2021/06/index.html","0adebb9ee10cad701b9fa0b5ed0b6dbf"],["/archives/2021/index.html","92bba5c266919ffad2a9ad6a7f6cca23"],["/archives/index.html","17529ab9d3827db70cab24251c05cea5"],["/archives/page/2/index.html","767af3b6078efddddb960a5be4cb88ee"],["/categories/index.html","81d5aa6eee88940d625ba3cca747f877"],["/categories/学习/index.html","135d25597801917ac7ddaa7d841f3326"],["/categories/收藏/index.html","d8bbff8d14b45a2c7063d6be308256db"],["/categories/文献/index.html","efad8d61abc55aaad5286e93686209f8"],["/categories/网站历史/index.html","fca6619740ad3e686365d213a8d16025"],["/categories/随想录/index.html","8f870f4afc16ca2d060e16111d65b449"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","79f1779750ce8f45f7d5204ad473ecd6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","6a2dbdcf4d079f45c0b60655e8da6ded"],["/img/favicon.png","abb19321150f6d3357cc2101ed3b84b0"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","17ecde708595860146cf5e667a2326e0"],["/js/main.js","9ae2856869433ab1770b105c639b7710"],["/js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["/js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/link/index.html","0c51dd7376304f3a464554f615a7c1c6"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/messageboard/index.html","c56482fe56cede028907fa2760847607"],["/page/2/index.html","2123f49f64e455cc4c009199286e175b"],["/sw-register.js","51df45fcb52c086671f89a945b03de3b"],["/tags/CSS/index.html","3968ae82498f13d93105eadc9e307264"],["/tags/Html/index.html","4c9475e9da6e262aff760cea146b94cb"],["/tags/index.html","4b6915ebb024a7991219a9c2212f3b8b"],["/tags/共产主义/index.html","fab9703991c38e3341b109d2d1bb7300"],["/tags/历史/index.html","ed69768fea665f4a913f0363f7b0564a"],["/tags/学习/index.html","6f1fc669a15b9905f4f01e2202ef2eff"],["/tags/开始/index.html","3e32fc67d41977c58528daf48fe46e34"],["/tags/文献/index.html","e98a2a2a7f1dd363ede2832aa2a3f5bf"],["/tags/文章/index.html","eb5446332965f447322bcd1f2c693eff"],["/tags/生物/index.html","137abd589b3175c65172e3bef3475a3b"],["/tags/网站推荐/index.html","910c406b39e5f67b97b8755b61d3e634"],["/tags/观点/index.html","e2fb9e3578a952037bf5a38174fd6402"],["/tags/随笔/index.html","d4e0744a1ff63a1606e7166e2290e0b8"],["/tags/高考/index.html","d49ad20e28e4c7f5e02d4d8548742198"]];
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
