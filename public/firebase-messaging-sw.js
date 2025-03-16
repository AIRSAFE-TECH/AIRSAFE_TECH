import { initializeApp } from "firebase/app";
import { getMessaging, onBackgroundMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDmjRGWVDyFdeUe0mUKmTDLpdEO4Ev0C_g",
  authDomain: "airsafetech.firebaseapp.com",
  projectId: "airsafetech",
  storageBucket: "airsafetech.firebasestorage.app",
  messagingSenderId: "561241681080",
  appId: "1:561241681080:web:38388fd565665477aed84d",
  measurementId: "G-XFF0GK20LE",
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

onBackgroundMessage(messaging, (payload) => {
    console.log("Notificación en segundo plano: ", payload);
    self.registration.showNotification(payload.notification.title, {
      body: payload.notification.body,
      icon: "/icon.png",
    });
  });