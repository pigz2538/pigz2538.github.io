/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/05/01/HelloWorld/index.html","ce9e4294ab3e6a601a6f79b7f064e171"],["/2020/05/01/这里是下午鼓捣图床和编辑器的历程/index.html","4997d52dce60c1a1cf1e4af072834704"],["/2020/05/02/啊就这了/index.html","af6cfaf17d361c820022c73e31e4e053"],["/2020/05/02/换了个主题/index.html","dc2ebe5180cce2cd601db2fbc56690bd"],["/2020/05/04/Html-CSS启蒙/index.html","77be08f81e7aac3f389ed82ea66b7055"],["/2020/05/04/前言/index.html","e7f2969ac6dece4745080a837aef8a3c"],["/2020/05/06/从《后浪》谈起/index.html","f2f4f11f3ff8c639049295b69623fa84"],["/2020/05/09/《共产党宣言》/index.html","7813d94247795149e7e84b0d12d85a76"],["/2020/05/10/博客部署到Coding/index.html","52ee4d3d7fff5497621f3d3c7df7abbb"],["/2020/05/10/转载：中国的基尼系数是多少？/index.html","0660da3751d99d870d771c4d6e499c20"],["/2020/05/17/生物边缘知识点/index.html","81f4a9ce5c5794f1632bdd077e353914"],["/2020/05/23/《对自己的探讨》/index.html","ee61282e66f70ada4a25436b50f9c09a"],["/2020/06/20/寻找生活的节奏/index.html","b82c8ed0f5746efa6cde43e5fb588634"],["/2021/06/10/重新出发！！！/index.html","70a614080209cd60584bfc7c4d0d6e20"],["/2021/06/11/怪/index.html","fe96be7b07be607fbab54bbdeaf60791"],["/2021/06/11/考驾照之路1/index.html","73713e21216cf2297f63199c6a907afe"],["/2021/06/12/《Hello-World》影评/index.html","977825dcde6512333b7b54b185605717"],["/2022/02/23/CUPT测试/index.html","d5438443222c8a87c1961f2305fe5c6a"],["/about/index.html","95fecab04485182eff0e7ed268d988b4"],["/archives/2020/05/index.html","a98ee9d9b95164449ee8b6ab30969468"],["/archives/2020/05/page/2/index.html","ac601ba3c2cbb2a16c8970a7431b5628"],["/archives/2020/06/index.html","cd1e68ca2f60c02bf1f2a3e2f8006a8d"],["/archives/2020/index.html","4d487ad5b4154aff90c9c4c39724cf3f"],["/archives/2020/page/2/index.html","21aebfcffe0e74a53a50ca444d20a7b0"],["/archives/2021/06/index.html","f9bb8050157671af96f3fffc4527fac2"],["/archives/2021/index.html","bfd7d2ffa652f52448f1a3ff2533fc7c"],["/archives/2022/02/index.html","6c0d7cc69a97ef349e7298a2882c1ca6"],["/archives/2022/index.html","97f7e3204117af2c2a88f7840b00a3f8"],["/archives/index.html","175d9d1d67985422199f740049ec0794"],["/archives/page/2/index.html","590459e05d9912a13ecae62b8f59ccf7"],["/categories/index.html","71637144cdb0c985ce8d2442225e7e95"],["/categories/学习/index.html","116e826798419206c606ca8da6b93553"],["/categories/影评/index.html","a596fdd5bf7952e7dfaab318b340e612"],["/categories/收藏/index.html","fc9c76e4ec02517354c44b36ef7d2907"],["/categories/文献/index.html","ae64a2ec768df1edd6d4090797c8577b"],["/categories/物理/index.html","6511d0cd68b888fd04e93afb54c44bc6"],["/categories/网站历史/index.html","66a23b3e1cbc60c4e537c6c7f5ce22bc"],["/categories/随想录/index.html","c728b9dcca1aa68aca0268c386e94c22"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","79f1779750ce8f45f7d5204ad473ecd6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","6a2dbdcf4d079f45c0b60655e8da6ded"],["/img/favicon.png","abb19321150f6d3357cc2101ed3b84b0"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","96cc4e84afd509ed12d9fe95fae7b3fa"],["/js/main.js","9ae2856869433ab1770b105c639b7710"],["/js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["/js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/link/index.html","dc223a913ec709d361027611d8781113"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/messageboard/index.html","aba29f1a43cca585b54b8af4390ec6b8"],["/page/2/index.html","94f3ff6784946b8b0d2399ad3ff56548"],["/sw-register.js","919fee1528aeb0150a9edc998593c6c3"],["/tags/CSS/index.html","26cb9f695c7a96e09a9802faf6aa3c05"],["/tags/CUPT/index.html","fe11546a5d3954b73d8be26af927b41b"],["/tags/Html/index.html","7d51270c8b67b9c976b9bffe177575d4"],["/tags/index.html","694c9595966c968819b2efe074ca62a0"],["/tags/共产主义/index.html","f781c4a9c1f6f5085a1ee54a2e335bf9"],["/tags/历史/index.html","fa4441367ad5288fcf92fb2c63428648"],["/tags/学习/index.html","4e40156c1b9175e00f60d069adf445ab"],["/tags/开始/index.html","b161aa1ca1b0c3031b8f31223fabc8dc"],["/tags/影评/index.html","317eed56ab33715666f37315967494fc"],["/tags/文献/index.html","e16d3fdc28914b37f3d46700271982c6"],["/tags/文章/index.html","80c7982ce1cd61bf1f086c9ba237b7d2"],["/tags/物理/index.html","b66eaa27b26fc6a4b1c40ed4c00b52e7"],["/tags/生物/index.html","8a951beb936d09ae478b2cdb65a3aed5"],["/tags/网站推荐/index.html","bafc122a3a037f719dfe4e0fe37636a6"],["/tags/观点/index.html","e9bf0e22b58d2d27441b82ffa083583d"],["/tags/随笔/index.html","85587267b5478820f152989b6393a5b6"],["/tags/高考/index.html","05e924993bbe941838a09a95f1bad4fb"]];
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
