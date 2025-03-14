import { useWebSocket } from "../../viewmodel/WebSocketViewModel";
import SensorCard from "../molecules/SensorCard";

function WebSocketComponent() {
    const wsHost = import.meta.env.VITE_WS_HOST;
    const wsPort = import.meta.env.VITE_WS_PORT;
    const { messages, isConnected } = useWebSocket(`ws://${wsHost}:${wsPort}/ws`);

    const parsedMessages = messages.map((msg) => {
        try {
            return JSON.parse(msg);
        } catch (error) {
            return null;
        }
    }).filter(Boolean);

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold">{isConnected ? "Conectado al WebSocket" : "Desconectado"}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {parsedMessages.map((data, index) => (
                    <SensorCard key={index} sensorName={data.sensor} newValue={data.value} />
                ))}
            </div>
        </div>
    );
}

export default WebSocketComponent;