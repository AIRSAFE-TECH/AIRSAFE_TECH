import Section from "../molecules/Section";
import Text from "../atoms/Text";

function HomePage() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-100 p-10">
            <Section title="🚀 Bienvenido a Nuestra Plataforma">
                <Text
                    text="Monitorea la seguridad de tu hogar en tiempo real con nuestra solución avanzada de WebSockets."
                    className="mt-4 text-lg max-w-2xl mx-auto"
                />
            </Section>

            <Section title="📡 ¿Qué es nuestro producto?">
                <Text
                    text="Nuestro dispositivo está diseñado para prevenir fugas de gas en tu hogar, y viene con un cerrador de válvulas automático que actúa en caso de detectar una fuga. Ideal para garantizar la seguridad en casas y comercios."
                    className="mt-4 max-w-3xl mx-auto"
                />
            </Section>

            <Section title="⚙️ ¿Cómo instalarlo en tu hogar?">
                <Text text="Sigue estos simples pasos para instalar nuestro dispositivo:" className="mt-2" />

                <div className="mt-6 text-left max-w-2xl mx-auto space-y-4">
                    <Text text="1️⃣ Coloca el dispositivo cerca de la válvula de gas:" />
                    <Text text="Asegúrate de que el dispositivo esté bien conectado y que tenga acceso a la red Wi-Fi de tu hogar." />

                    <Text text="2️⃣ Conecta el dispositivo al sistema de válvulas de gas:" />
                    <Text text="Instala el cerrador de válvulas automático siguiendo las instrucciones del manual." />

                    <Text text="3️⃣ Verifica la conexión y configuración del dispositivo:" />
                    <Text text="Asegúrate de que el dispositivo esté correctamente sincronizado con la red y funcionando correctamente." />

                    <Text text="4️⃣ Disfruta de la tranquilidad de tener tu hogar más seguro:" />
                    <Text text="Una vez instalado, el dispositivo monitoreará tu sistema de gas y te notificará de inmediato si detecta alguna fuga." />
                </div>
            </Section>
        </div>
    );
}

export default HomePage;