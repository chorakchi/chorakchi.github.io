"use strict";var precacheConfig=[["/index.html","354a658e51625256a28a22eecd60a521"],["/static/css/main.51f4a4eb.css","62df244f8a89fb43f5afb6ad7185c382"],["/static/js/main.4ad536be.js","a6938fe6d8cd3ab75bb7bfbc8e0d2cea"],["/static/media/Background.46a533ef.jpg","46a533ef8d000d880a8c5f46efc3524e"],["/static/media/background9.9dabecd6.jpg","9dabecd6b0bcffa1b0fa407ef3dcb337"],["/static/media/chevron-left.428324ed.svg","428324ed6bbecd37ea6249bf72163441"],["/static/media/chevron-right.184c7bb3.svg","184c7bb3a44be9606bb317f3a2641401"],["/static/media/cross.57a51364.svg","57a513642e1c5956454742c03fdf775d"],["/static/media/download.99c27de8.svg","99c27de88946b6e67a2a87f2663c691f"],["/static/media/heart-fill.3af7f41b.svg","3af7f41ba319b5f09904b03360c17c4e"],["/static/media/heart.c642bdee.svg","c642bdee1b90d7a11c5006d2df28288d"],["/static/media/hellofresh-logo-mono-corom.cd5f556a.svg","cd5f556aff204712a5f6702a692b3e4d"],["/static/media/hellofresh-logo.7d3b7387.svg","7d3b73870f7bad8d885057291c65ef7f"],["/static/media/js-logo.14f102e6.svg","14f102e692d6b074b9340ee0ba19a560"],["/static/media/lemon-flat.45f68638.svg","45f686388fea09c0c3d28fccd3123422"],["/static/media/link.5b3799df.svg","5b3799dfad8eb7dd80aa13db80a940c5"],["/static/media/lock.7589c6ad.svg","7589c6ad03bea30d5bbbe0bfc0841b1d"],["/static/media/logo.8981be67.svg","8981be67c1f5fc138a74b44486643fab"],["/static/media/nodjs-logo.b337a2fb.svg","b337a2fb0b1289e6757e632dc766ff6b"],["/static/media/picture.f398b411.svg","f398b411ef85eeabe9299cddc351d060"],["/static/media/react-logo.433dd0f9.svg","433dd0f971f6972b5893872e9a762fdf"],["/static/media/star-fill.23c14486.svg","23c14486d4bb96ab4856572f546b927a"],["/static/media/star.e1d87925.svg","e1d87925fd733b33dc0dae8369976651"],["/static/media/user.52543ba9.svg","52543ba96cae6786b6496e543a1e964e"],["/static/media/wood-background.5f921387.jpg","5f92138727c1534b96924d6fba86925d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});