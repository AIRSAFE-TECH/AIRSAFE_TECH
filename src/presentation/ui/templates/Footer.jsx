function Footer() {
    return (
        <footer className="bg-custom-dark-blue text-white p-6 text-center">
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
                    <div className="flex justify-center space-x-4">
                        <a href="#" className="hover:opacity-80 transition">
                            <img src="/media/icons/facebook.png" alt="Facebook" className="w-8 h-8" />
                        </a>
                        <a href="#" className="hover:opacity-80 transition">
                            <img src="/media/icons/twitter.png" alt="Twitter" className="w-8 h-8" />
                        </a>
                        <a href="#" className="hover:opacity-80 transition">
                            <img src="/media/icons/instagram.png" alt="Instagram" className="w-8 h-8" />
                        </a>
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