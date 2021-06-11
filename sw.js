/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/05/01/HelloWorld/index.html","429fe779392e14a83805de1f7bacd6eb"],["/2020/05/01/这里是下午鼓捣图床和编辑器的历程/index.html","67d01793552db1c47acfd91a40463fd7"],["/2020/05/02/啊就这了/index.html","e22cf488d338f50cf9437507a58194e6"],["/2020/05/02/换了个主题/index.html","ce54c978e40a740e8c70431c7ae2757d"],["/2020/05/04/Html-CSS启蒙/index.html","f341144704d9edaf24f7228e48ca35b7"],["/2020/05/04/前言/index.html","da1c4b689cd95955fab2f9e08da6b78f"],["/2020/05/06/从《后浪》谈起/index.html","f8ed54c462fc15d5df64cb6c981c80ef"],["/2020/05/09/《共产党宣言》/index.html","e8d894a912976302f88a263b46d0767b"],["/2020/05/10/博客部署到Coding/index.html","3703df3d1267ae21bd64bb119dca82e8"],["/2020/05/10/转载：中国的基尼系数是多少？/index.html","ea21228dde2e85342328b97e15d08283"],["/2020/05/17/生物边缘知识点/index.html","08339c9a777ca1ddfabf4c761f70eec8"],["/2020/05/23/《对自己的探讨》/index.html","1a4a5121e58eeabc43d6f0036f7b71e1"],["/2020/06/20/寻找生活的节奏/index.html","ba27631c9aa46bc24a5fbe46f46e3518"],["/2021/06/10/重新出发！！！/index.html","ba756d0f87e8703cb9ce619964891641"],["/2021/06/11/怪 /index.html","dd2d6f5fad2eb3780b1a5d9e17857e5e"],["/about/index.html","6f74d7c4f8e8b95ceb6893dfcbf8b8ab"],["/archives/2020/05/index.html","69479950d43bae7b30d215453e5e4d3f"],["/archives/2020/05/page/2/index.html","9e826e29aa980d7994597b54d95877b1"],["/archives/2020/06/index.html","598171ade3d977a9bb36347068d5dbc3"],["/archives/2020/index.html","e28b655b7cbafccefac7be700bc0f778"],["/archives/2020/page/2/index.html","b7dc32449f598130aa89008a1f8fbfc6"],["/archives/2021/06/index.html","1c06b757703d1dbfc4bc87a4c10e4a6c"],["/archives/2021/index.html","dfe0a6d1e89c266559dc467d841eb7ec"],["/archives/index.html","7351cd45f50fad068970081fc64d32ab"],["/archives/page/2/index.html","ba2caaf97e0ae9a875dfbbfa3463a644"],["/categories/index.html","20ad60a322fefd7f8aba1bc841049c79"],["/categories/学习/index.html","51d4172f3d46fca81a78c76ca028f340"],["/categories/收藏/index.html","c78547fd04084c90e8e0bd968eb5e78c"],["/categories/文献/index.html","703aecd2f298b5bf90cbee41475edcca"],["/categories/网站历史/index.html","3b373bda54affce3a1fb587e0b442437"],["/categories/随想录/index.html","4a89c12ee3aab7d09dc76d8915cc6cca"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","79f1779750ce8f45f7d5204ad473ecd6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","6a2dbdcf4d079f45c0b60655e8da6ded"],["/img/favicon.png","abb19321150f6d3357cc2101ed3b84b0"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","825823d487eaab7b038c94977ebd8b20"],["/js/main.js","9ae2856869433ab1770b105c639b7710"],["/js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["/js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/link/index.html","dc05831ff87b3f3fa4c7aafca03c50a6"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/messageboard/index.html","2b3e7eed9334cfdf83a7e545a231e5d7"],["/page/2/index.html","fa491081d10e31b1cba5b025945d71ab"],["/sw-register.js","12c3eed5822a23382a893a7869f9bf55"],["/tags/CSS/index.html","df5029044dd909bbed69394d84ce52fb"],["/tags/Html/index.html","9976d2d9122f669d5198a2ff27d65fb4"],["/tags/index.html","02df7a630e4f6c1d192c286cd11b9ce7"],["/tags/共产主义/index.html","bbe491969f2bd04bce0c740148d46a43"],["/tags/历史/index.html","f9847c231fbe29dcd4e18b4f397d10eb"],["/tags/学习/index.html","f24bbe66a8aa5526971a73a0340b3a00"],["/tags/开始/index.html","67ef8aeda8f7e143cb8ea2e81e3a9325"],["/tags/文献/index.html","bfd3f2ed98e545dc6f39d80bf4a86a13"],["/tags/文章/index.html","7bf1b7b41bf8195ee654d4cc660b7259"],["/tags/生物/index.html","b477e23b0061fb49f37fd35c59125727"],["/tags/网站推荐/index.html","f2b1c9dbfaca5f746a2c0f7ba00bcc92"],["/tags/观点/index.html","d1d6ee9ed446687a8e1ba60fb6081861"],["/tags/随笔/index.html","a8b1751879d289424d791930779c9067"],["/tags/高考/index.html","b5ed8833509405b480cc7eac4fcf04b1"]];
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
