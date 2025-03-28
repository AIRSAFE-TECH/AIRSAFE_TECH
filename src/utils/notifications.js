import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { initializeApp } from 'firebase/app';

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

export const askForPermission = async () => {
  try {
    const token = await getToken(messaging, {
      vapidKey: 'BOhbtePehh6_Xq8UW2GtQlkc54uvWYgvKvDl816hJ-ZwkhlnL9G9hU81we8Qm8iKsQ-ZCImemWBlHaGQQHbRzbE',
    });

    if (token) {
      localStorage.setItem('deviceToken', token);
      console.log("TOKEN : " + localStorage.getItem('deviceToken'))
      await fetch("http://localhost:8080/suscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, topic: "alerts" }),
      });

      return token;
    }
  } catch (error) {
    console.error("Error obteniendo el token de notificación:", error);
  }
};


export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log('Notificación recibida en primer plano:', payload);
      alert("payload: ",payload)
      resolve(payload);
    });
  }); 