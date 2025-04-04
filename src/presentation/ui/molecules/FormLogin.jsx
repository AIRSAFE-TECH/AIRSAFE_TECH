import { useLoginViewModel } from "../../viewmodel/user/userLoginViewModel";
import Label from "../atoms/Label";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import showPassIcon from "/media/icons/show-pass.png";
import hidePassIcon from "/media/icons/hide-pass.png";

function FormLogin() {
    const { formData, showPassword, loading, error, handleChange, togglePasswordVisibility, handleSubmit } = useLoginViewModel();

    return (
        <form onSubmit={handleSubmit} className="grid gap-6">
            <h2 className="text-2xl font-bold text-[#266bb4] text-center">Iniciar sesión</h2>

            {error && <p className="text-red-600 text-center">{error}</p>}

            <div className="flex flex-col gap-2">
                <Label text="Usuario" className="font-medium text-gray-700" />
                <Input 
                    type="text" 
                    name="usuario" 
                    value={formData.usuario} 
                    onChange={handleChange} 
                    placeholder="Ej: usuario123"
                    className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#266bb4]"
                />
            </div>

            <div className="relative flex flex-col gap-2">
                <Label text="Contraseña" className="font-medium text-gray-700" />
                <div className="relative">
                    <Input 
                        type={showPassword ? "text" : "password"} 
                        name="contrasena" 
                        value={formData.contrasena} 
                        onChange={handleChange} 
                        placeholder="●●●●●●"
                        className="border border-gray-300 rounded-md px-4 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-[#266bb4] w-full"
                    />
                    <button 
                        type="button" 
                        className="absolute right-3 top-1/2 -translate-y-1/2" 
                        onClick={togglePasswordVisibility}
                    >
                        <img 
                            src={showPassword ? hidePassIcon : showPassIcon} 
                            alt="Mostrar Contraseña" 
                            className="w-6 h-6 opacity-75 hover:opacity-100"
                        />
                    </button>
                </div>
            </div>

            <Button 
                text={loading ? "Cargando..." : "Iniciar sesión"} 
                disabled={loading}
                type="submit"
                className={`w-full py-3 rounded-md transition shadow-md ${
                    loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#266bb4] hover:bg-[#1e558e] text-white"
                }`}
            />
        </form>
    );
}

export default FormLogin;