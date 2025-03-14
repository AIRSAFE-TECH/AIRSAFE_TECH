import { useState, useEffect } from "react";
import { useWebSocket } from "../../viewmodel/WebSocketViewModel";
import SensorCard from "../molecules/SensorCard";
import Chart from "../molecules/Chart";

function WebSocketComponent() {
    const wsHost = import.meta.env.VITE_WS_HOST;
    const wsPort = import.meta.env.VITE_WS_PORT;
    const { messages, isConnected } = useWebSocket(`ws://${wsHost}:${wsPort}/ws`);

    const [sensorData, setSensorData] = useState({
        temperatura_dht: 0,
        humedad: 0,
        temperatura_bmp: 0,
        presion: 0,
        calidad_aire: 0,
        gas_inflamable: 0,
    });

    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        if (messages.length > 0) {
            try {
                const latestMessage = JSON.parse(messages[messages.length - 1]);
                setSensorData(latestMessage);
    
                setChartData((prev) => [
                    ...prev.slice(-19), 
                    { time: new Date().toLocaleTimeString(), value: latestMessage.temperatura_dht }
                ]);
            } catch (error) {
                console.error("Error al procesar el mensaje:", error);
            }
        }
    }, [messages]);
    

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold">{isConnected ? "Conectado al WebSocket" : "Desconectado"}</h2>

            <h2 className="subtitulo mt-4">🌡️ Monitoreo de Sensores</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                <SensorCard title="Temperatura (DHT22)" value={sensorData.temperatura_dht} unit="°C" />
                <SensorCard title="Humedad" value={sensorData.humedad} unit="%" />
                <SensorCard title="Temperatura (BMP180)" value={sensorData.temperatura_bmp} unit="°C" />
                <SensorCard title="Presión" value={sensorData.presion} unit="hPa" />
                <SensorCard title="Calidad del Aire (MQ-135)" value={sensorData.calidad_aire} unit="ppm" />
                <SensorCard title="Gas Inflamable (MQ-2)" value={sensorData.gas_inflamable} unit="V" />
            </div>

            <div className="mt-8">
                <Chart data={chartData} />
            </div>
        </div>
    );
}


export default WebSocketComponent;