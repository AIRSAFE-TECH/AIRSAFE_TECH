import { onMessage } from "firebase/messaging";
import { messaging } from "../config/firebase_config";

export const listenForNotifications = () => {
  onMessage(messaging, (payload) => {
    console.log("Mensaje recibido en primer plano: ", payload);

    const { title, body } = payload.notification;

    if (Notification.permission === "granted") {
      try {
        new Notification(title, { body });
      } catch (error) {
        console.error("Error mostrando la notificación:", error);
      }
    } else {
      console.log("Permiso para notificaciones no concedido.");
    }
  });
};