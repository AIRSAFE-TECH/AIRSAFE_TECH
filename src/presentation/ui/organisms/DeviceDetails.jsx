import Title from "../atoms/Title";
import Text from "../atoms/Text";

function DeviceDetails({ device }) {
    if (!device) {
        return <Text text="Selecciona un dispositivo para ver los detalles." className="text-center" />;
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-md w-full">
            <Title text={`🔍 Detalles de ${device.name}`} className="mb-4" />
            <Text text={`📌 ID: ${device.id}`} />
            <Text text={`📡 Estado: ${device.status}`} />
            <Text text={`📍 Ubicación: ${device.location}`} />
        </div>
    );
}

export default DeviceDetails;