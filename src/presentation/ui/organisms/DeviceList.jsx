import DeviceItem from "../molecules/DeviceItem";
import Title from "../atoms/Title";

function DeviceList({ devices, onSelect }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md w-full">
            <Title text="📋 Lista de Dispositivos" className="mb-4" />
            <div className="space-y-4">
                {devices.map((device) => (
                    <DeviceItem key={device.id} device={device} onSelect={onSelect} />
                ))}
            </div>
        </div>
    );
}

export default DeviceList;