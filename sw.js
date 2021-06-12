/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/05/01/HelloWorld/index.html","4a9505474d55ed9ecaa9414301b4c47e"],["/2020/05/01/这里是下午鼓捣图床和编辑器的历程/index.html","fae8c9d8f948a92e5eedb30f3a73c9f1"],["/2020/05/02/啊就这了/index.html","04cf8f0768fa29b9aebd703cd25b98db"],["/2020/05/02/换了个主题/index.html","78ed696e079331d3f5789d99b8d2e513"],["/2020/05/04/Html-CSS启蒙/index.html","cee9601b6eab89ed120a6beda1132272"],["/2020/05/04/前言/index.html","598f6e7b51eeb859e1a365e1a71b16ec"],["/2020/05/06/从《后浪》谈起/index.html","c1bae8aab19bb0b4a5a2d1e2378023cd"],["/2020/05/09/《共产党宣言》/index.html","f5b2f2632cc9593d93935e8a204d1749"],["/2020/05/10/博客部署到Coding/index.html","4a031ac09b81ba7f573cbadd857509cd"],["/2020/05/10/转载：中国的基尼系数是多少？/index.html","bd671fdb6b47090fada957ea985cc914"],["/2020/05/17/生物边缘知识点/index.html","4ea3bf8af8dd295d6a7b2c8dff744eea"],["/2020/05/23/《对自己的探讨》/index.html","3f39ae69c573ffe88a4997a2641d66a1"],["/2020/06/20/寻找生活的节奏/index.html","57bdc6b359310c981c8dba147f88012a"],["/2021/06/10/重新出发！！！/index.html","909c8f5c666d9b7004d52f4918d008e2"],["/2021/06/11/怪/index.html","71ebe87cacf376909b4ef9f864e8e534"],["/2021/06/11/考驾照之路1/index.html","0a311fadb4135703116b2c23b36eb48b"],["/2021/06/12/《Hello-World》影评/index.html","614c47f5b67c311ba300983f2b1721ba"],["/about/index.html","d719498b8010489f67c73f96bd6c0836"],["/archives/2020/05/index.html","e7b78944c265889eb7ce067d20c66a97"],["/archives/2020/05/page/2/index.html","3a341ae60170444e785f72f7294a9b38"],["/archives/2020/06/index.html","8985274493489cb979cab1a83f97a5f1"],["/archives/2020/index.html","d5ed9967356f874820990660a4ffe485"],["/archives/2020/page/2/index.html","d3abb77122e6f99392fc7a570db65821"],["/archives/2021/06/index.html","b14d3544ed017fa253612c6883d7b5bb"],["/archives/2021/index.html","98f64db5307174bf6293c04e5661dce8"],["/archives/index.html","88d2ad4a39fcdaf7d2c59e06997165de"],["/archives/page/2/index.html","12eaa4365ec0d13835c9b34b415deb3d"],["/categories/index.html","feb1611532e398806adbb157672da1fb"],["/categories/学习/index.html","63f2b778976127dfa638a6c6f2b0cf7c"],["/categories/影评/index.html","537ba17ea51549ecc40e11136a9b3dc8"],["/categories/收藏/index.html","fb1c3e229a9f798c417e4bc12d868291"],["/categories/文献/index.html","ec4500f0e4368a596d0edc60687b4e96"],["/categories/网站历史/index.html","256532d3b65a38c8eaa841f54927aeff"],["/categories/随想录/index.html","73c2da88c2490067f5b51d3db53fe280"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","79f1779750ce8f45f7d5204ad473ecd6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","6a2dbdcf4d079f45c0b60655e8da6ded"],["/img/favicon.png","abb19321150f6d3357cc2101ed3b84b0"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","fa832f07182f5676928582f40f449304"],["/js/main.js","9ae2856869433ab1770b105c639b7710"],["/js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["/js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/link/index.html","0b4895219a0c1f3a000b2c49e9676cd3"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/messageboard/index.html","54c3f1430adfdc979e0b1cb35495dd76"],["/page/2/index.html","b1eab2e61b07e72aca730016dd4b9686"],["/sw-register.js","21fb3fd98e8baabbe1afa9cd7ff12f1c"],["/tags/CSS/index.html","ae8fc84bc553c79181a316079b005334"],["/tags/Html/index.html","509541d2730195a06f127b9f16332e65"],["/tags/index.html","9d49b344af51d2fc7af892c271c10acb"],["/tags/共产主义/index.html","dfa1f7c0813e454d477819cb54049ee0"],["/tags/历史/index.html","b0abf3fc7dbd588c296c591b0d291541"],["/tags/学习/index.html","d55804bf830d26705e104f19b9859548"],["/tags/开始/index.html","247bf9b78355c054752df2b4b7dc56bf"],["/tags/影评/index.html","072b53ae828291b0281b1a107d19d1d7"],["/tags/文献/index.html","7e56c2f857a9e8ec80979775aaec69bc"],["/tags/文章/index.html","6a52eaf77514ba525784707eea0e281a"],["/tags/生物/index.html","2e1aa698f2d9d56dfe93864b8a8b0df0"],["/tags/网站推荐/index.html","33eb40afe9be5b82ac93b976b0dc3674"],["/tags/观点/index.html","f93f66e963018d9cc2dda53c961428d1"],["/tags/随笔/index.html","9116579502691580ea4be6d9d5ecbc26"],["/tags/高考/index.html","b4cc53cbb6d724b3d513601679f415e0"]];
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
