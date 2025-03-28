import { useState, useEffect } from "react";

export function useWebSocket(url) {
    const [messages, setMessages] = useState([]);
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        let socket;
        let reconnectTimer;

        const connect = () => {
            socket = new WebSocket(url);

            socket.onopen = () => {
                setIsConnected(true);
                console.log("Conectado al WebSocket");
            };

            socket.onmessage = (event) => {
                
                setMessages((prev) => [...prev, event.data]);
            };

            socket.onclose = () => {
                setIsConnected(false);
                console.log("Desconectado. Intentando reconectar...");
                reconnectTimer = setTimeout(connect, 3000);
            };

            socket.onerror = (error) => {
                console.error("Error en WebSocket:", error);
                socket.close();
            };
        };

        connect();

        return () => {
            clearTimeout(reconnectTimer);
            socket.close();
        };
    }, [url]);

    return { messages, isConnected };
}
