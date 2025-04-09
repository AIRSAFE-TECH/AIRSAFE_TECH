import { useState, useEffect } from "react";
import { WebSocketRepositoryImpl } from "../../data/repository/WebSocketRepositoryImpl";
import { SensorData } from "../../data/entities/sensorData";
import { verificarAlertas } from "../../utils/alertasSensores";

export function useWebSocket(url) {
    const [isConnected, setIsConnected] = useState(false);
    const [sensorData, setSensorData] = useState(new SensorData({}));
    const [chartData, setChartData] = useState([]);
    const [alertCounters, setAlertCounters] = useState({
        gas: 0,
        temp: 0,
        presion: 0,
    });

    useEffect(() => {
        const repo = new WebSocketRepositoryImpl(url);

        const handleOnOpen = () => {
            if (!isConnected) {
                setIsConnected(true);
            }
        };

        const handleOnClose = () => {
            if (isConnected) {
                setIsConnected(false);
            }
        };

        const handleOnMessage = (message) => {
            try {
                const latestMessage = JSON.parse(message);
                const updatedSensorData = new SensorData(latestMessage);
                setSensorData(updatedSensorData);

                setChartData((prev) => [
                    ...prev.slice(-19),
                    {
                        time: new Date().toLocaleTimeString(),
                        value: updatedSensorData.temperatura_dht,
                    },
                ]);

                verificarAlertas(updatedSensorData, alertCounters, setAlertCounters);
            } catch (error) {
                console.error("Error al procesar el mensaje:", error);
            }
        };

        repo.connect(handleOnOpen, handleOnClose, handleOnMessage);

        return () => {
            repo.close();
        };
    }, [url]);

    return { sensorData, chartData, alertCounters, isConnected };
}