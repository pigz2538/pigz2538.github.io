/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/05/01/HelloWorld/index.html","72ebb4d1026c97f4e95bf98f8f649f55"],["/2020/05/01/这里是下午鼓捣图床和编辑器的历程/index.html","422286ab772cdae3e2b770d93fbf75e9"],["/2020/05/02/啊就这了/index.html","cd282d534c1726abb2751c1a56904675"],["/2020/05/02/换了个主题/index.html","f9496e8d397c0648085950b5b8be0954"],["/2020/05/04/Html-CSS启蒙/index.html","25a2821cb325517382266204f9fea977"],["/2020/05/04/前言/index.html","056fb3ccf7dfa538437b067396a473b2"],["/2020/05/06/从《后浪》谈起/index.html","d86cf4966ffeb5ce1cc28a84d7b824e1"],["/2020/05/09/《共产党宣言》/index.html","fb587d494258e1da4d626c2bdabc8202"],["/2020/05/10/博客部署到Coding/index.html","cbce18978947960aa09972a47d7c9eec"],["/2020/05/10/转载：中国的基尼系数是多少？/index.html","b0674a52b3be5f45469bceef5c80826e"],["/2020/05/17/生物边缘知识点/index.html","ca980b8c96c420d04d72954994ca76ed"],["/2020/05/23/《对自己的探讨》/index.html","33ada236551732fd21bcd8b3d362f636"],["/2020/06/20/寻找生活的节奏/index.html","b26982d77a0d22b83df6f085f62894ff"],["/2021/06/10/重新出发！！！/index.html","033c997abcbdd3e6727be5006c67ac42"],["/2021/06/11/怪/index.html","af07763ec232bdf2ba075e5793cac12c"],["/2021/06/11/考驾照之路1/index.html","257da9480ae61337e1ce9215dc994618"],["/2021/06/12/《Hello-World》影评/index.html","6cb06f5672a2d40cc95eac39c7ea31d8"],["/about/index.html","f2e75561099f720cda9f36653b716fef"],["/archives/2020/05/index.html","7cf7357a7b42f8c9a5f7da539be80e43"],["/archives/2020/05/page/2/index.html","6c8828560e79bded471617168c410703"],["/archives/2020/06/index.html","4e439cc6cf5035895a66cd3d40f5a04f"],["/archives/2020/index.html","7f85e68b1034d8465c357e3a53f3b4e7"],["/archives/2020/page/2/index.html","71b16ac6ffdce53a827894b4b32f957a"],["/archives/2021/06/index.html","2804866e4953fc29baf522400434faba"],["/archives/2021/index.html","3e01c268a3915c9ec31bdaa5b8312f23"],["/archives/index.html","f54c20c965dd3ba1b34cc716440ff2b1"],["/archives/page/2/index.html","dadd714db05e3b2f2721ab197b5538aa"],["/categories/index.html","3b8c8c5f951973a51daf654885df30bc"],["/categories/学习/index.html","5d67a2b8fb43b2b2b3878e8c663c62e8"],["/categories/影评/index.html","ee0c43d33a7990bc1dd5674c7444a19b"],["/categories/收藏/index.html","793d264c99aa67c329f60ea46e9024fc"],["/categories/文献/index.html","cc47697cb5018b99219a39a5b45a3af0"],["/categories/网站历史/index.html","62b7b4c7eec73aca9b49e2c3cc6019c8"],["/categories/随想录/index.html","f6a42a019b9ce257427a6f16839dcfdf"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","79f1779750ce8f45f7d5204ad473ecd6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","6a2dbdcf4d079f45c0b60655e8da6ded"],["/img/favicon.png","abb19321150f6d3357cc2101ed3b84b0"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","923890f9b626f568cdb2e12a1bc350c3"],["/js/main.js","9ae2856869433ab1770b105c639b7710"],["/js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["/js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/link/index.html","a14d31eab29919fef6bd6c8bd0722ffe"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/messageboard/index.html","f65df9640e30a9d9cc316b93c1e301b2"],["/page/2/index.html","29e592576ac495d190dd2cb9eb75cb81"],["/sw-register.js","70eaf946b3dff4247bc453fb07f55c89"],["/tags/CSS/index.html","2382a13ea92f3d237eabd0c4fee21141"],["/tags/Html/index.html","fa0a26e747cd23dc5085c70e4544f15a"],["/tags/index.html","6530208d2dfd64103b038efba6608cbd"],["/tags/共产主义/index.html","c352732456fac6a60a67abacc5fa73c2"],["/tags/历史/index.html","04035a903d75cda45f7d108b1a01eddc"],["/tags/学习/index.html","675ddd5d3c69badba307d1a80348c6b4"],["/tags/开始/index.html","ecbd2655501f916927beab5d84d897bb"],["/tags/影评/index.html","86efb48168a23a9344f333e274b93c00"],["/tags/文献/index.html","2b00884939711df875e6c40b193c917e"],["/tags/文章/index.html","83379f7900da3f1eb869d9dbb6c8f7a4"],["/tags/生物/index.html","8dfb8063a0e570b09333f8cb58219186"],["/tags/网站推荐/index.html","a05d18bfafb1f7a7e98dea6efaee7817"],["/tags/观点/index.html","8c47b5fd2978a0939c3d5651c8ba0a3b"],["/tags/随笔/index.html","224b68d0006f9029cbebc5aec72a9ccb"],["/tags/高考/index.html","ebb77f9c322c7d9f6a64add3db4c3464"]];
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
