importScripts('https://www.gstatic.com/firebasejs/4.6.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.6.2/firebase-messaging.js');

firebase.intializeApp({
  'messagingSenderId': '597509118435'
});

const messaging = firebase.messaging();


