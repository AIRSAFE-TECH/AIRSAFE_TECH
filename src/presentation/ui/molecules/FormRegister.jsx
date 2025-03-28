import { useRegisterViewModel } from "../../viewmodel/user/userRegisterViewModel";
import Label from "../atoms/Label";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

import showPassIcon from "/media/icons/show-pass.png";
import hidePassIcon from "/media/icons/hide-pass.png";

function FormRegister() {
    const {
        formData,
        showPassword,
        showConfirmPassword,
        handleChange,
        togglePasswordVisibility,
        toggleConfirmPasswordVisibility,
        handleSubmit
    } = useRegisterViewModel();

    return (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
                <Label text="Nombre" />
                <Input type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Ej: Jhon Doe"/>
            </div>

            <div className="md:col-span-2">
                <Label text="Correo" />
                <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Ej: example@gmail.com"/>
            </div>

            <div className="md:col-span-2">
                <Label text="Teléfono" />
                <Input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} placeholder="Ej: 9611112345" maxLength="10"/>

            </div>

            <div className="relative">
                <Label text="Contraseña" />
                <Input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} placeholder="12345"/>
                <button type="button" className="absolute right-3 top-10" onClick={togglePasswordVisibility}>
                    <img src={showPassword ? hidePassIcon : showPassIcon} alt="Toggle Password" className="w-6 h-6"/>
                </button>
            </div>

            <div className="relative">
                <Label text="Confirmar Contraseña" />
                <Input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="12345"/>
                <button type="button" className="absolute right-3 top-10" onClick={toggleConfirmPasswordVisibility}>
                    <img src={showConfirmPassword ? hidePassIcon : showPassIcon} alt="Toggle Password" className="w-6 h-6"/>
                </button>
            </div>

            <div className="md:col-span-2">
                <Button text="Registrarse" className="w-full bg-[#266bb4] text-white py-3 rounded-md hover:bg-[#52738c] transition" />
            </div>
        </form>
    );
}

export default FormRegister;