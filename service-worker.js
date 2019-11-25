/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b693f9e37c1334742e637b1101ae60d3"
  },
  {
    "url": "assets/css/0.styles.a7c1ccb7.css",
    "revision": "02a0cdff8c18b7d0120be8aee6fcf10b"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4fff84d4.js",
    "revision": "f3f28c7c6d39c3ddd110d1a9d059a8ab"
  },
  {
    "url": "assets/js/11.0140d144.js",
    "revision": "32c7b082bb3c160f9265a4f5874ce36f"
  },
  {
    "url": "assets/js/12.418f8271.js",
    "revision": "cc9ea4c60d1ee946692f9208037deaf2"
  },
  {
    "url": "assets/js/13.821c3552.js",
    "revision": "8d7d72f0ac13ebc61963d85836a8e2c4"
  },
  {
    "url": "assets/js/14.c105732c.js",
    "revision": "b4f28367a55889afffff8202a12800b5"
  },
  {
    "url": "assets/js/15.feacf51c.js",
    "revision": "1ea9358dd8c79e57bf0679c98517f972"
  },
  {
    "url": "assets/js/16.af2179fe.js",
    "revision": "78d7aecda696a4196138c3c816e11510"
  },
  {
    "url": "assets/js/17.6cbd83ff.js",
    "revision": "4de8e1b9e0ae2d140bb431d37867356a"
  },
  {
    "url": "assets/js/18.597e49ba.js",
    "revision": "39156ba0289ffaed451d13fc34c7d0a6"
  },
  {
    "url": "assets/js/19.ef71b79d.js",
    "revision": "c8c4d7e52b189d246256527720f40585"
  },
  {
    "url": "assets/js/20.c3a594fe.js",
    "revision": "bdce6e619d772f1cdbb5760657c96a86"
  },
  {
    "url": "assets/js/21.58f3331d.js",
    "revision": "500077cb9fd18332e74b3acbe7398b99"
  },
  {
    "url": "assets/js/22.148236b8.js",
    "revision": "adfa113b2be3db81c93a87f99696c50b"
  },
  {
    "url": "assets/js/23.b9cd0395.js",
    "revision": "8a5e4053f4322e33880cc9037c535c6f"
  },
  {
    "url": "assets/js/24.ff7bd5fe.js",
    "revision": "f551a2c5210af34975e6e90a719fa22c"
  },
  {
    "url": "assets/js/25.aafbdc73.js",
    "revision": "6c48d25746e867c23e4832b7821a98ee"
  },
  {
    "url": "assets/js/26.b1e4c84c.js",
    "revision": "584030d4446bc60831bd31b2b56f0d83"
  },
  {
    "url": "assets/js/27.41cdf4ae.js",
    "revision": "3b03f0b729e7ffef895e6ba353991059"
  },
  {
    "url": "assets/js/3.5431caa5.js",
    "revision": "ff78f5ac518e1ea924b339393b89e18b"
  },
  {
    "url": "assets/js/4.ae528797.js",
    "revision": "b1930a3b89ce0a7f3b4734465641522d"
  },
  {
    "url": "assets/js/5.57f40886.js",
    "revision": "ea87963bdcfc4ef050fca80f6d972332"
  },
  {
    "url": "assets/js/6.756380d3.js",
    "revision": "c0488d6d506b37e2e1f468750604e8ea"
  },
  {
    "url": "assets/js/7.5d1cba85.js",
    "revision": "0b23ab11673d26f9c410003d0ec2fae0"
  },
  {
    "url": "assets/js/8.e7e74fff.js",
    "revision": "84f0292e297ef92b3eeb23126edff17e"
  },
  {
    "url": "assets/js/9.4a099eca.js",
    "revision": "89c805bd87287eecff17698196a44bac"
  },
  {
    "url": "assets/js/app.3baf204a.js",
    "revision": "52af539df40ef5156cb8e06dd4e0799f"
  },
  {
    "url": "assets/js/vendors~notification.241402c3.js",
    "revision": "805674791258660334e65e8dacf35a0f"
  },
  {
    "url": "guide/alipay/index.html",
    "revision": "7bc4244dcbb85ba53194bd91b5f25a66"
  },
  {
    "url": "guide/alipay/init.html",
    "revision": "1f44252cb6711a9b35f9383916a14d2c"
  },
  {
    "url": "guide/client/ios.html",
    "revision": "691773c4e91350795ba87e1b00cd7278"
  },
  {
    "url": "guide/client/jpay.html",
    "revision": "81823ad97a5629a26ee6ec3f3f4b1c17"
  },
  {
    "url": "guide/config/alipay_config.html",
    "revision": "c52d04c29dde6dedb28dd8a81ff91671"
  },
  {
    "url": "guide/config/weixinpay_config.html",
    "revision": "499652177de8869bcfc55b3b663874d8"
  },
  {
    "url": "guide/donate/index.html",
    "revision": "8c076374fcaf9522706e75b2eaf7cbe4"
  },
  {
    "url": "guide/http.html",
    "revision": "ad586970d101fabe79a3a9c63988cc48"
  },
  {
    "url": "guide/index.html",
    "revision": "31dc7c6d707a07c28f823cdf88c117f3"
  },
  {
    "url": "guide/jdpay/index.html",
    "revision": "c7b1281b3878b635591df783ff9af3be"
  },
  {
    "url": "guide/maven.html",
    "revision": "a979229ac3703241d3237da62b98451f"
  },
  {
    "url": "guide/qqpay/index.html",
    "revision": "b3436ea30de4336e7fb8854f2a8f198b"
  },
  {
    "url": "guide/resource.html",
    "revision": "98c9e491e7ea56e8cc223634b133e2cd"
  },
  {
    "url": "guide/unionpay/index.html",
    "revision": "cc394d2e073f3f3cb629d9161a6a6471"
  },
  {
    "url": "guide/weixin/tnw.html",
    "revision": "621a58421614fe4cbae781a83e339ae7"
  },
  {
    "url": "guide/weixin/weixin_guide.html",
    "revision": "53c2d46e05a18b5ea0421522e83f18e0"
  },
  {
    "url": "guide/wxpay/external.html",
    "revision": "ba2bebd0d66a9594af73f718238fef2f"
  },
  {
    "url": "guide/wxpay/index.html",
    "revision": "0c0c738cb085314aedb9523cedc72fdb"
  },
  {
    "url": "guide/wxpay/question.html",
    "revision": "a205b6919bc7ee37dccf104e2d30d7ba"
  },
  {
    "url": "index.html",
    "revision": "690b527893a15d9e6b8bfe06f1d8d8f4"
  },
  {
    "url": "wxpay.jpeg",
    "revision": "519a6443adb0110d19e3bf9f273d5f62"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
