/**
 * Check out https://googlechromelabs.github.io/sw-toolbox/ for
 * more info on how to use sw-toolbox to custom configure your service worker.
 */
 // importScripts('https://www.gstatic.com/firebasejs/4.6.2/firebase-app.js');
 // importScripts('https://www.gstatic.com/firebasejs/4.6.2/firebase-messaging.js');

'use strict';
importScripts('./build/sw-toolbox.js');

self.toolbox.options.cache = {
  name: 'ionic-cache'
};

// pre-cache our key assets
self.toolbox.precache(
  [
    './build/main.js',
    './build/vendor.js',
    './build/main.css',
    './build/polyfills.js',
    'index.html',
    'manifest.json'
  ]
);

// dynamically cache any other local assets
self.toolbox.router.any('/*', self.toolbox.fastest);

// for any other requests go to the network, cache,
// and then only use that cached resource if your user goes offline
self.toolbox.router.default = self.toolbox.networkFirst;

// firebase.intializeApp({
//   'messagingSenderId': '597509118435'
// });
//
// const messaging = firebase.messaging();
//
// messaging.setBackgroundMessageHandler(function(payload) {
//   console.log('Received background message ', payload);
//   // here you can override some options describing what's in the message;
//   // however, the actual content will come from the Webtask
//   const notificationOptions = {
//     icon: '/assets/imgs/logo2.png'
//   };
//   return self.registration.showNotification(notificationTitle, notificationOptions);
// });