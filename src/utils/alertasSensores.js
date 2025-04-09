import Swal from "sweetalert2";

export function verificarAlertas(data, contadores, setContadores) {
    const { calidad_aire, temperatura_dht, presion } = data;
    const { gas, temp, presion: presionCont } = contadores;

    if (calidad_aire > 140 && gas < 2) {
        Swal.fire({
            title: "⚠️ Alerta de Gas Inflamable",
            text: `El nivel de gas inflamable ha alcanzado ${calidad_aire} ppm. ¡Toma precauciones!`,
            icon: "warning",
            confirmButtonText: "Entendido",
            background: "#fef3c7",
            iconColor: "#f59e0b",
        });

        setContadores((prev) => ({ ...prev, gas: prev.gas + 1 }));
    }

    if (temperatura_dht > 33 && temp < 2) {
        Swal.fire({
            title: "🌡️ Alerta de Temperatura Alta",
            text: `La temperatura ha superado los 32°C. Actualmente: ${temperatura_dht}°C`,
            icon: "error",
            confirmButtonText: "Entendido",
            background: "#fee2e2",
            iconColor: "#dc2626",
        });

        setContadores((prev) => ({ ...prev, temp: prev.temp + 1 }));
    }

    if (presion > 975 && presionCont < 2) {
        Swal.fire({
            title: "⛔ Alerta de Alta Presión",
            text: `La presión ha superado los 975 hPa. Actualmente: ${presion} hPa.`,
            icon: "error",
            confirmButtonText: "Entendido",
            background: "#fee2e2",
            iconColor: "#dc2626",
        });

        setContadores((prev) => ({ ...prev, presion: prev.presion + 1 }));
    }
}