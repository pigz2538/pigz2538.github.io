/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/05/01/HelloWorld/index.html","4005cb2f03652574ee9686064669b557"],["/2020/05/01/这里是下午鼓捣图床和编辑器的历程/index.html","575f2ab86a2220d66d2937eabaad6fbc"],["/2020/05/02/啊就这了/index.html","f273b81de7589641689ccf261037cef3"],["/2020/05/02/换了个主题/index.html","37727b73ccd761a2d62b321738560879"],["/2020/05/04/Html-CSS启蒙/index.html","bd0f48368c97fb7b4ef5eaeae8ca9d1b"],["/2020/05/04/前言/index.html","87d2c3f74739b1423e8670ab43301a43"],["/2020/05/06/从《后浪》谈起/index.html","da2d5521a82b0a52068711ca5ecbb8fa"],["/2020/05/09/《共产党宣言》/index.html","7da6ae1ab14bcc5c943c17204c17809d"],["/2020/05/10/博客部署到Coding/index.html","f5fa1b94220e8fa95716f28e3b077552"],["/2020/05/10/转载：中国的基尼系数是多少？/index.html","66f1e64bb4adc0b6d412b65e7e2b94e9"],["/2020/05/17/生物边缘知识点/index.html","9918e7c6943428d5c3bbe25b20fcff3b"],["/2020/05/23/《对自己的探讨》/index.html","761e05064a7e0c503a6040ccb9743891"],["/2020/06/20/寻找生活的节奏/index.html","70b76485d673ddf16a6673fcee72112c"],["/2021/06/10/重新出发！！！/index.html","c95a1bce9b2dad167de7e88e443f6826"],["/2021/06/11/怪/index.html","5ba6ebee02915faca393f2fffba9a37e"],["/2021/06/11/考驾照之路1/index.html","9ebbe5c2d7e8db1b9fe1d23699e912e8"],["/2021/06/12/《Hello-World》影评/index.html","d99ae9a4400f70ab9b5aecd74a4a763c"],["/2022/02/23/CUPT测试/index.html","5628aeecfa8c2a98517d21c83130b873"],["/about/index.html","3add14bbdf7275f16ff28da2debfd5e1"],["/archives/2020/05/index.html","315fd9214f05184b7e3791a7adc7af6e"],["/archives/2020/05/page/2/index.html","7021f962aac77984d06263b7291252b4"],["/archives/2020/06/index.html","c6361b0e6f75fb73a410154f92bf033b"],["/archives/2020/index.html","d0d2d0c6f4b50cf6c4091a6e70aa3018"],["/archives/2020/page/2/index.html","e6096d20c3abf287b0095e98c6672b24"],["/archives/2021/06/index.html","915ab4b2fca24b98cb440d756dd839fb"],["/archives/2021/index.html","87ca09e8bf15b37f9fe3f364c62ea890"],["/archives/2022/02/index.html","701fde22b3eaf61640e1d4ec3ad7e1a4"],["/archives/2022/index.html","ec17548fc7b45680efa841d736c5c14b"],["/archives/index.html","214a0156a917d9973ef7384477e5e939"],["/archives/page/2/index.html","bd280a5be8675f612fe8c763784adfeb"],["/categories/index.html","05bcb5e7a9a5c67f97b41ca0763de860"],["/categories/学习/index.html","62d54ed452972a1597eb62d0035569be"],["/categories/影评/index.html","4ba4018eadf8e6b7573935eeff38b36e"],["/categories/收藏/index.html","dfb1efd1a05820afd569df5b0cfbbeb4"],["/categories/文献/index.html","e2a1e964ac71cbb6eeab64f141546644"],["/categories/物理/index.html","b75cc7e98622626132894d750694827b"],["/categories/网站历史/index.html","c9c965859efa4ee55baa37e63682fa1e"],["/categories/随想录/index.html","4f5fba4fe6c1a53a769138b8cd07b0a9"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","79f1779750ce8f45f7d5204ad473ecd6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","6a2dbdcf4d079f45c0b60655e8da6ded"],["/img/favicon.png","abb19321150f6d3357cc2101ed3b84b0"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","2b3d5627058340e28c0310acda851640"],["/js/main.js","9ae2856869433ab1770b105c639b7710"],["/js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["/js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/link/index.html","2880497f6f02a4e60d26e6420c2c9407"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/messageboard/index.html","0341cd7e380c2309e89284680a7bf215"],["/page/2/index.html","1ad2aa55ee58bf29f771eff793f78449"],["/sw-register.js","d4181d9f9d5e74883b76e73f991101ac"],["/tags/CSS/index.html","b08f4d2dd09e0ddd950089fe11a3aec4"],["/tags/CUPT/index.html","263c537388ad18f68a5b7367e9255d70"],["/tags/Html/index.html","f007259d21145dbf4841693ad88ec6f3"],["/tags/index.html","69c069e48ff9348d88a684c0562492f8"],["/tags/共产主义/index.html","60c48e91d083736c6c2353e2accbbc0c"],["/tags/历史/index.html","8f671db99b238b8bf9e09c25e9e180d3"],["/tags/学习/index.html","08d2ae01ba3609c5fc049e7266e46b90"],["/tags/开始/index.html","4fa588c8f4108dd531fb7286fd4555fb"],["/tags/影评/index.html","1e7fc1dc17484efad8598b5d67fdc4f5"],["/tags/文献/index.html","44b99a101943e1b5f5a95fd1dd4d2b00"],["/tags/文章/index.html","679ad8f3091b6632126da64e272da716"],["/tags/物理/index.html","c68133229c43b21fb9686dacaab5f225"],["/tags/生物/index.html","b502caa54f329f787512e026182525d3"],["/tags/网站推荐/index.html","db90d443e820ffb60cdb635209fc3369"],["/tags/观点/index.html","96ae61cc91ada6e710d3322f77d22b4d"],["/tags/随笔/index.html","4e1b3f35166408ca974708cb4ce22350"],["/tags/高考/index.html","dd2066f3c77e00fd015b89d868ee6c2d"]];
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
