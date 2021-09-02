/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  const singleRequire = name => {
    if (name !== 'require') {
      name = name + '.js';
    }
    let promise = Promise.resolve();
    if (!registry[name]) {
      
        promise = new Promise(async resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = name;
            document.head.appendChild(script);
            script.onload = resolve;
          } else {
            importScripts(name);
            resolve();
          }
        });
      
    }
    return promise.then(() => {
      if (!registry[name]) {
        throw new Error(`Module ${name} didn’t register its module`);
      }
      return registry[name];
    });
  };

  const require = (names, resolve) => {
    Promise.all(names.map(singleRequire))
      .then(modules => resolve(modules.length === 1 ? modules[0] : modules));
  };
  
  const registry = {
    require: Promise.resolve(require)
  };

  self.define = (moduleName, depsNames, factory) => {
    if (registry[moduleName]) {
      // Module is already loading or loaded.
      return;
    }
    registry[moduleName] = Promise.resolve().then(() => {
      let exports = {};
      const module = {
        uri: location.origin + moduleName.slice(1)
      };
      return Promise.all(
        depsNames.map(depName => {
          switch(depName) {
            case "exports":
              return exports;
            case "module":
              return module;
            default:
              return singleRequire(depName);
          }
        })
      ).then(deps => {
        const facValue = factory(...deps);
        if(!exports.default) {
          exports.default = facValue;
        }
        return exports;
      });
    });
  };
}
define("./sw.js",['./workbox-7193f14a'], function (workbox) { 'use strict';

  /**
  * Welcome to your Workbox-powered service worker!
  *
  * You'll need to register this file in your web app.
  * See https://goo.gl/nhQhGp
  *
  * The rest of the code is auto-generated. Please don't update this file
  * directly; instead, make changes to your Workbox build configuration
  * and re-run your build process.
  * See https://goo.gl/2aRDsh
  */

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */

  workbox.precacheAndRoute([{
    "url": "assets/border.9c554756.png",
    "revision": "ae551c0120c9997e6b47313df8fb9b89"
  }, {
    "url": "assets/handmade-paper.b4217bf2.png",
    "revision": "4c6c48c1274604953704991f7625e635"
  }, {
    "url": "assets/index.b452a102.css",
    "revision": "15c4a79f2bd1010c07f219007b8bdf09"
  }, {
    "url": "assets/index.e5b5b44d.js",
    "revision": "0cbe4e2753701651adaab3693b1a28df"
  }, {
    "url": "assets/photo.f237d682.jpeg",
    "revision": "ad58ab9b4bb53727729468cc75aa3fb2"
  }, {
    "url": "assets/seal.693ef3a6.png",
    "revision": "dcf17db9bd30ac2ee6c662cd4f60ddf2"
  }, {
    "url": "assets/vendor.f4220d3b.js",
    "revision": "47a84a87035f865399a6f5d7e0e6e463"
  }, {
    "url": "icon/android-chrome-192x192.png",
    "revision": "2ef22822785d2dfc01f59a6e1c6de137"
  }, {
    "url": "icon/android-chrome-512x512.png",
    "revision": "6aad29d8b290c3079ee152c45804ceda"
  }, {
    "url": "icon/apple-touch-icon.png",
    "revision": "5de3a6c788fe066d4c20ef0c653a185f"
  }, {
    "url": "index.html",
    "revision": "066e6f681fe0ce6e2941a063d2eaf1fd"
  }, {
    "url": "lottie/partyyy.json",
    "revision": "90609269ebc9ca7674b2924b1d0b73e7"
  }, {
    "url": "registerSW.js",
    "revision": "402b66900e731ca748771b6fc5e7a068"
  }, {
    "url": "spark/1.png",
    "revision": "3e0c7d56eea2d128935f2a9e511fa0a9"
  }, {
    "url": "spark/10.png",
    "revision": "3ce8a5748f50dcbe104a9dced9bff445"
  }, {
    "url": "spark/2.png",
    "revision": "e4de9ed0dbd24faef72aa39cb0f54bc0"
  }, {
    "url": "spark/3.png",
    "revision": "339603d3119cb61330fba24bc38be40e"
  }, {
    "url": "spark/4.png",
    "revision": "427a0ce28382df7c9cb45ab1025fecf9"
  }, {
    "url": "spark/5.png",
    "revision": "baaab459129d2a0b45616d44ecaccdd2"
  }, {
    "url": "spark/6.png",
    "revision": "0fe043953d45e1723a04f30c3a3e25b5"
  }, {
    "url": "spark/7.png",
    "revision": "703aa479a578abdeb9ad9a34c5971d14"
  }, {
    "url": "spark/8.png",
    "revision": "f99fbc8294fbe99cc68aa54b595546b6"
  }, {
    "url": "spark/9.png",
    "revision": "ce2231f90625352f04a2a0795ccd9590"
  }, {
    "url": "favicon.ico",
    "revision": "392ad0fd6277b04bd49074c344747fae"
  }, {
    "url": "icon/android-chrome-192x192.png",
    "revision": "2ef22822785d2dfc01f59a6e1c6de137"
  }, {
    "url": "icon/android-chrome-512x512.png",
    "revision": "6aad29d8b290c3079ee152c45804ceda"
  }, {
    "url": "manifest.webmanifest",
    "revision": "216a1431835eafa8d922512e54eb94c3"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));
  workbox.registerRoute(/.*/, new workbox.CacheFirst({
    "cacheName": "music-cache",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 10,
      maxAgeSeconds: 31536000
    }), new workbox.CacheableResponsePlugin({
      statuses: [0, 200]
    })]
  }), 'GET');

});
