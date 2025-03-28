import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getMessaging, onBackgroundMessage } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging.js';

const firebaseConfig = {
  apiKey: "AIzaSyDmjRGWVDyFdeUe0mUKmTDLpdEO4Ev0C_g",
  authDomain: "airsafetech.firebaseapp.com",
  projectId: "airsafetech",
  storageBucket: "airsafetech.appspot.com",
  messagingSenderId: "561241681080",
  appId: "1:561241681080:web:38388fd565665477aed84d"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

onBackgroundMessage(messaging, (payload) => {
  console.log('Notificación en segundo plano:', payload);
  const { title, body } = payload.notification;
  self.registration.showNotification(title, {
    body: body,
    icon: '/icon.png',
  });
});