import { useState, useEffect } from "react";

export function useWebSocket(url) {
    const [messages, setMessages] = useState([]);
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        const socket = new WebSocket(url);
        
        socket.onopen = () => setIsConnected(true);
        socket.onmessage = (event) => setMessages((prev) => [...prev, event.data]);
        socket.onclose = () => setIsConnected(false);
        socket.onerror = (error) => console.error("WebSocket Error:", error);
        
        return () => socket.close();
    }, [url]);
    
    return { messages, isConnected };
}