import Title from "../atoms/Title";
import Text from "../atoms/Text";
import Button from "../atoms/Button";

function EmergencyPage() {
    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100 py-8">
            <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
                <Title text="Contacto de Emergencia" />
                <Text text="Si necesitas asistencia inmediata, contacta a los siguientes servicios:" />

                <div className="mt-4 space-y-4">
                    <div className="p-4 border rounded-md shadow-sm bg-gray-100">
                        <Text text="🚑 Ambulancia: 911" className="font-semibold" />
                        <Button text="Llamar" className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition" />
                    </div>

                    <div className="p-4 border rounded-md shadow-sm bg-gray-100">
                        <Text text="🚓 Policía: 911" className="font-semibold" />
                        <Button text="Llamar" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition" />
                    </div>

                    <div className="p-4 border rounded-md shadow-sm bg-gray-100">
                        <Text text="🔥 Bomberos: 911" className="font-semibold" />
                        <Button text="Llamar" className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmergencyPage;