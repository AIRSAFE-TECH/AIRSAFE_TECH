import Text from "../atoms/Text";
import Button from "../atoms/Button";

function DeviceItem({ device, onSelect }) {
    return (
        <div className="p-4 border rounded-md shadow-sm bg-white flex justify-between items-center">
            <Text text={device.name} className="text-lg font-medium" />
            <Button text="Ver detalles" onClick={() => onSelect(device)} />
        </div>
    );
}

export default DeviceItem;