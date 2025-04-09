import { useWebSocket } from "../../viewmodel/WebSocketViewModel";
import SensorCard from "../molecules/SensorCard";
import Chart from "../molecules/Chart";

function WebSocketComponent() {
    const wsHost = import.meta.env.VITE_WS_HOST;
    const wsPort = import.meta.env.VITE_WS_PORT;
    const { sensorData, chartData, isConnected } = useWebSocket(`ws://${wsHost}:${wsPort}/ws`);

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold text-custom-darkest-blue">
                {isConnected ? "Conectado al Airsafe" : "Desconectado"}
            </h2>

            <h2 className="subtitulo mt-4 text-custom-darkest-blue">
                🌡️ Monitoreo de Sensores
            </h2>

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