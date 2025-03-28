import { useState } from "react";
import AuthContainer from "./AuthContainer";

function RegisterContainer() {
    const [isRegister, setIsRegister] = useState(true);

    return (
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">
            <h2 className="text-2xl font-semibold text-[#266bb4] text-center mb-6">
                {isRegister ? "Registro" : "Iniciar Sesión"}
            </h2>

            <AuthContainer isRegister={isRegister} setIsRegister={setIsRegister} />
        </div>
    );
}

export default RegisterContainer;