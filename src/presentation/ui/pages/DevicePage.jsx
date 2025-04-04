import { useState } from "react";
import DeviceList from "../organisms/DeviceList";
import DeviceDetails from "../organisms/DeviceDetails";

function DevicesPage() {
    const [selectedDevice, setSelectedDevice] = useState(null);

    const devices = [
        { id: 1, name: "Sensor de Temperatura", status: "Activo", location: "Sala A" },
        { id: 2, name: "Cámara de Seguridad", status: "Inactivo", location: "Pasillo 3" },
        { id: 3, name: "Sensor de Humedad", status: "Activo", location: "Laboratorio" }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-gray-100 p-10 space-y-6">
            <DeviceList devices={devices} onSelect={setSelectedDevice} />
            <DeviceDetails device={selectedDevice} />
        </div>
    );
}

export default DevicesPage;