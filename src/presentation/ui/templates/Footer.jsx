function Footer() {
    return (
        <footer className="bg-gray-900 text-white p-6 text-center">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div>
                    <h2 className="text-lg font-semibold mb-2">Números de Emergencia</h2>
                    <ul className="space-y-1 text-sm">
                        <li>🚨 Emergencias: <strong>911</strong></li>
                        <li>🚑 Cruz Roja: <strong>55 53 95 11 11</strong></li>
                        <li>🛟 Protección Civil: <strong>55 51 28 00 00</strong></li>
                        <li>🔥 Fuga de gas: <strong>911</strong></li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-2">Síguenos</h2>
                    <div className="flex justify-center space-x-4 text-xl">
                        <a href="#" className="hover:text-blue-400">📘</a> 
                        <a href="#" className="hover:text-blue-500">🐦</a> 
                        <a href="#" className="hover:text-red-500">📷</a> 
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-2">Contacto</h2>
                    <p className="text-sm">📍 Av. Ejemplo #123, CDMX</p>
                    <p className="text-sm">📞 Atención: 55 1234 5678</p>
                    <p className="text-sm">📧 contacto@example.com</p>
                </div>
            </div>

            <div className="mt-6 text-xs text-gray-400">
                © {new Date().getFullYear()} Todos los derechos reservados.
            </div>
        </footer>
    );
}

export default Footer;