/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/05/01/HelloWorld/index.html","a6c43caaa60715b8d5fedaae32eb8b0e"],["/2020/05/01/这里是下午鼓捣图床和编辑器的历程/index.html","c4edb4fe24fef8741f26d3a43707251e"],["/2020/05/02/啊就这了/index.html","4a73bdfc16d9e7fbb3b9efec1101f738"],["/2020/05/02/换了个主题/index.html","6573bdd626bccab31a3e61d03c289c5c"],["/2020/05/04/Html-CSS启蒙/index.html","110eb0a0c9e2e22a63a066ab4f2b7a7a"],["/2020/05/04/前言/index.html","ccfe74538d9784a2c25c927abdfc7956"],["/2020/05/06/从《后浪》谈起/index.html","bc07b71221b8bb43dcfa50722a9826c3"],["/2020/05/09/《共产党宣言》/index.html","695d8868bc74e48da37517bef5683307"],["/2020/05/10/博客部署到Coding/index.html","ce321880b09ebef182d5859c13270a9c"],["/2020/05/10/转载：中国的基尼系数是多少？/index.html","8606db59aea0abd22838be1a1dea3982"],["/2020/05/17/生物边缘知识点/index.html","4f60c2db82a14fc824c3987d52d2d836"],["/2020/05/23/《对自己的探讨》/index.html","05422ddb96ba133c96829f0296363142"],["/2020/06/20/寻找生活的节奏/index.html","bb2ed702960bd217d69c2380e07974b6"],["/2021/06/10/重新出发！！！/index.html","743e9d0efe5d78928c5a38dc9a4ce421"],["/about/index.html","71c1949d3f9643de04a6feae747a229e"],["/archives/2020/05/index.html","b02e18297a78c4b69e56a4cff5ee6b5f"],["/archives/2020/05/page/2/index.html","f84faf450b8cc4976d6bc909c58349ec"],["/archives/2020/06/index.html","63358d337e949dc8de5d42326b2f7e0f"],["/archives/2020/index.html","bcf4fb953acf4d816285b484a77f7acf"],["/archives/2020/page/2/index.html","7d3a77ec1440a3d8e72d54565e349f84"],["/archives/2021/06/index.html","de522429c824b41ba14903c909fe252e"],["/archives/2021/index.html","ee8b96faa6d7102bacece17ae39fb7e2"],["/archives/index.html","af541ac7c34bae9869f4691218313e88"],["/archives/page/2/index.html","9c3c4e55a933b1d98306482bb960eb6a"],["/categories/index.html","3316a51eec9ae113abff86c82df04815"],["/categories/学习/index.html","38878ca150300942eac4f83f1258882b"],["/categories/收藏/index.html","a6f4129a054f2ff36f1cddf436656bcb"],["/categories/文献/index.html","e05b9ac4622b0e52d42c978b9dc97e1a"],["/categories/网站历史/index.html","a1d2e6d71f0ebcc5f5709bf0db9c4a4a"],["/categories/随想录/index.html","1a73949d04741b83338c569e282f3e97"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","79f1779750ce8f45f7d5204ad473ecd6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","6a2dbdcf4d079f45c0b60655e8da6ded"],["/img/favicon.png","abb19321150f6d3357cc2101ed3b84b0"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","1c9bd3f9f93db55a85c332d39c9e1e97"],["/js/main.js","9ae2856869433ab1770b105c639b7710"],["/js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["/js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/link/index.html","f2ff4a6fae8ff6aac185a69b8948f693"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/messageboard/index.html","dac9b61d03a4e9fef9dac643f89efcb3"],["/page/2/index.html","6a9820b66f7fb6f1f64481fce7ef8f60"],["/sw-register.js","5b196638c8f19515b180f95ca6ba9b15"],["/tags/CSS/index.html","f04b725c72b2329e96ed2554e7f92ca0"],["/tags/Html/index.html","f682548a8ef03ccf2a59006502426580"],["/tags/index.html","47ecc7ebb52e2c13e30edf0f1a41470a"],["/tags/共产主义/index.html","e1dde0ac751f7354bff86c5adc61e556"],["/tags/历史/index.html","6ecd640c042b36919befd4b9bb90fd87"],["/tags/学习/index.html","a2663a7c53b4f8a6a19a58ec3076defa"],["/tags/开始/index.html","ec4537a95db9f35bb6020497e5e1bb82"],["/tags/文献/index.html","8b4a8f60bb12f88730dee22c48fa6cf2"],["/tags/文章/index.html","14b0794ee0f1925b66ae2c96b8c5929c"],["/tags/生物/index.html","e5d6500f0eb5eea1d911e066ced41d65"],["/tags/网站推荐/index.html","27c70aef8679508e2751e602bdb09571"],["/tags/观点/index.html","3ea180fc79635e6fcd969cda81104db5"],["/tags/随笔/index.html","dec7f21ad54170a7469b6a4d06d99f74"],["/tags/高考/index.html","773f09bc598939bcae716fb78663ba35"]];
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
