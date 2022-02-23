/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/05/01/HelloWorld/index.html","0413613b8ec063cf0939b45649811d1f"],["/2020/05/01/这里是下午鼓捣图床和编辑器的历程/index.html","e51efa72f0b2cf6e083750525821fed8"],["/2020/05/02/啊就这了/index.html","8b03b90c9cbd66e58602173d59b6eee7"],["/2020/05/02/换了个主题/index.html","7c62da21bc5d3128883513c6463b94ed"],["/2020/05/04/Html-CSS启蒙/index.html","7e3c762794073ce9d031af4d5c1c1802"],["/2020/05/04/前言/index.html","bb8fa9b80e0d4eddba1435aca9416fca"],["/2020/05/06/从《后浪》谈起/index.html","378e1309ecb26a5b5c54670ff353f665"],["/2020/05/09/《共产党宣言》/index.html","f5188aa9e51d0414d73da25b53da11ba"],["/2020/05/10/博客部署到Coding/index.html","e33b8b86211df8c6da3ecb34b18c36cd"],["/2020/05/10/转载：中国的基尼系数是多少？/index.html","7560db01e692c7f1dac35fbc567528ee"],["/2020/05/17/生物边缘知识点/index.html","0b56a0fffecf3999a9e733b141f0ba9a"],["/2020/05/23/《对自己的探讨》/index.html","1a25f1dfe4955102f1eae31c7b2aff56"],["/2020/06/20/寻找生活的节奏/index.html","8a678e00b193b79044fccb58d21e10dc"],["/2021/06/10/重新出发！！！/index.html","30b1ee38f9b72d33a17328563603b04d"],["/2021/06/11/怪/index.html","bad5985d9a78a688218db61b1e76a1a9"],["/2021/06/11/考驾照之路1/index.html","4c5e52e331a8b2e1b2a93172d1cf3edf"],["/2021/06/12/《Hello-World》影评/index.html","eedd7920b9b71250b107ba1261775578"],["/2022/02/23/CUPT测试/index.html","26979c7d19c72dfbd628424887934ede"],["/about/index.html","c169373f640af4fde29a5331913fe443"],["/archives/2020/05/index.html","60afc416681c9cfafe6114d66dc7fab3"],["/archives/2020/05/page/2/index.html","32b6d01f14143e9b8cb41e7b1c9ea8f2"],["/archives/2020/06/index.html","d4f61c0077c21d6b7de18671a9bde294"],["/archives/2020/index.html","4343ecd4faeb4912d4f1147fec7cb722"],["/archives/2020/page/2/index.html","fa983321f3286a07d6b4e332819c6cde"],["/archives/2021/06/index.html","8bcb42e11b786e32abbf677a16e1a8f1"],["/archives/2021/index.html","ed5c76bc3711f1c1542c1506257daeb1"],["/archives/2022/02/index.html","6a36a6babb782d5934f4d24d952e1fda"],["/archives/2022/index.html","1fd2748faddad4bf411acfb3dae6ea18"],["/archives/index.html","fef54b7a86581e9408c08eba4ae32c5d"],["/archives/page/2/index.html","32d5c4785651ad57793b6906c13bd4d3"],["/categories/index.html","4d569a72882bcfb15ecc9a9de75e6e7a"],["/categories/学习/index.html","bd80024d3c8b74eadb2fdef82c0c3a7f"],["/categories/影评/index.html","088a032d44afc269d33c31ad4c56e26f"],["/categories/收藏/index.html","ed9f541ffe8681b6fbc4e781ff6e86eb"],["/categories/文献/index.html","295da35488a9f22569672b2658fac2cb"],["/categories/物理/index.html","403478402fa8998139fc575f39f67ca6"],["/categories/网站历史/index.html","575193485545028c0c3ea4a7cb5e0f72"],["/categories/随想录/index.html","d0961c8657ce1af5f32b47f667c04737"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","79f1779750ce8f45f7d5204ad473ecd6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","6a2dbdcf4d079f45c0b60655e8da6ded"],["/img/favicon.png","abb19321150f6d3357cc2101ed3b84b0"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","d0c44912cb3f65187f037ad4b38a5a38"],["/js/main.js","9ae2856869433ab1770b105c639b7710"],["/js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["/js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/link/index.html","4d863802c0b9fd62fd3ac973b6505fd6"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/messageboard/index.html","30245c2d28aca4dcc00e9f72185bf261"],["/page/2/index.html","49ec27c3b9eb4a4b5f6e8a3dd1696e34"],["/sw-register.js","983a2d5bf56325b186675de7c13814fd"],["/tags/CSS/index.html","23f9c570e0f30ba573daddecb4c15577"],["/tags/CUPT/index.html","976a03f7ee63721f20769b7d0c6c30fd"],["/tags/Html/index.html","fe727c88f4094d1b01488b9830ee649d"],["/tags/index.html","729c2564867a94c18225e641a23fd094"],["/tags/共产主义/index.html","3a62820b87ef91964bdc3324de4a55f6"],["/tags/历史/index.html","af7026a20b68d2adb6d0a635aceaaa5c"],["/tags/学习/index.html","4ad753c8235e025d1015e9c31a0ba737"],["/tags/开始/index.html","73386a25f5255758d8d092fa9c611f92"],["/tags/影评/index.html","28a671afcc0ba29fe07e1a529f471728"],["/tags/文献/index.html","25536b6e2b88472978a437599ebfae26"],["/tags/文章/index.html","c5cc7f9ed30c91a22488807150ef6731"],["/tags/物理/index.html","40ad34ff45897d2b264f13319663c5e5"],["/tags/生物/index.html","83b5e67761748766a25b503db791ca30"],["/tags/网站推荐/index.html","65d2f8542ffd3b04df5c68f26e93cbad"],["/tags/观点/index.html","d7d30c7e86d42627acb7c658f8ee6519"],["/tags/随笔/index.html","126cae303805f3422b80814a9713dbbd"],["/tags/高考/index.html","826494a73ebcd011c15239ba1eb9f1d0"]];
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
