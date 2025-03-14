import { WebSocketServer } from "ws";

const server = new WebSocketServer({ port: 8080 });

server.on("connection", (ws) => {
    console.log("Cliente conectado");

    setInterval(() => {
        const sensors = [
            { sensor: "Temperatura", value: (20 + Math.random() * 10).toFixed(2) },
            { sensor: "Humedad", value: (30 + Math.random() * 20).toFixed(2) },
            { sensor: "Presión", value: (950 + Math.random() * 50).toFixed(2) },
        ];
        ws.send(JSON.stringify(sensors[Math.floor(Math.random() * sensors.length)]));
    }, 3000);

    ws.on("close", () => console.log("Cliente desconectado"));
});

console.log("Servidor WebSocket corriendo en ws://localhost:8080");