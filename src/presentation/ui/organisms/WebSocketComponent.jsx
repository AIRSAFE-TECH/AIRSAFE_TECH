import { useState, useEffect } from "react";
import { useWebSocket } from "../../viewmodel/WebSocketViewModel";
import SensorCard from "../molecules/SensorCard";
import Chart from "../molecules/Chart";
import Swal from "sweetalert2";

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
    const [gasAlertCount, setGasAlertCount] = useState(0);
    const [tempAlertCount, setTempAlertCount] = useState(0);
    const [pressureAlertCount, setPressureAlertCount] = useState(0);

    useEffect(() => {
        if (messages.length > 0) {
            try {
                const latestMessage = JSON.parse(messages[messages.length - 1]);
                setSensorData(latestMessage);
    
                setChartData((prev) => [
                    ...prev.slice(-19), 
                    { time: new Date().toLocaleTimeString(), value: latestMessage.temperatura_dht }
                ]);

                if (latestMessage.calidad_aire > 140 && gasAlertCount < 2) {
                    Swal.fire({
                        title: "⚠️ Alerta de Gas Inflamable",
                        text: `El nivel de gas inflamable ha alcanzado ${latestMessage.calidad_aire} ppm. ¡Toma precauciones!`,
                        icon: "warning",
                        confirmButtonText: "Entendido",
                        background: "#fef3c7",
                        iconColor: "#f59e0b",
                    });

                    setGasAlertCount(gasAlertCount + 1);
                }

                if (latestMessage.temperatura_dht > 33 && tempAlertCount < 2) {
                    Swal.fire({
                        title: "🌡️ Alerta de Temperatura Alta",
                        text: `La temperatura ha superado los 32°C. Actualmente: ${latestMessage.temperatura_dht}°C`,
                        icon: "error",
                        confirmButtonText: "Entendido",
                        background: "#fee2e2",
                        iconColor: "#dc2626",
                    });

                    setTempAlertCount(tempAlertCount + 1);
                }

                if (latestMessage.presion > 975 && pressureAlertCount < 2) {
                    Swal.fire({
                        title: "⛔ Alerta de Alta Presión",
                        text: `La presión ha superado los 975 hPa. Actualmente: ${latestMessage.presion} hPa.`,
                        icon: "error",
                        confirmButtonText: "Entendido",
                        background: "#fee2e2",
                        iconColor: "#dc2626",
                    });

                    setPressureAlertCount(pressureAlertCount + 1);
                }

            } catch (error) {
                console.error("Error al procesar el mensaje:", error);
            }
        }
    }, [messages, gasAlertCount, tempAlertCount, pressureAlertCount]);

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold text-custom-darkest-blue">{isConnected ? "Conectado al WebSocket" : "Desconectado"}</h2>

            <h2 className="subtitulo mt-4 text-custom-darkest-blue">🌡️ Monitoreo de Sensores</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                <SensorCard title="Temperatura (DHT22)" value={sensorData.temperatura_dht} unit="°C" />
                <SensorCard title="Humedad" value={sensorData.humedad} unit="%" />
                <SensorCard title="Temperatura (BMP180)" value={sensorData.temperatura_bmp} unit="°C" />
                <SensorCard title="Presión" value={sensorData.presion} unit="hPa" />
                <SensorCard title="Calidad del Aire (MQ-135)" value={sensorData.calidad_aire} unit="ppm" />
                <SensorCard title="Gas Inflamable (MQ-2)" value={sensorData.gas_inflamable} unit="ppm" />
            </div>

            <div className="mt-8">
                <Chart data={chartData} />
            </div>
        </div>
    );
}

export default WebSocketComponent;