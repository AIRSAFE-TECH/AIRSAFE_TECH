import { useLoginViewModel } from "../../viewmodel/user/userLoginViewModel";
import Label from "../atoms/Label";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import showPassIcon from "/media/icons/show-pass.png";
import hidePassIcon from "/media/icons/hide-pass.png";

function FormLogin() {
    const { formData, showPassword, handleChange, togglePasswordVisibility, handleSubmit } = useLoginViewModel();

    return (
        <form onSubmit={handleSubmit} className="grid gap-6">
            <div>
                <Label text="Correo" />
                <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Ej: example@gmail.com"/>
            </div>

            <div className="relative">
                <Label text="Contraseña" />
                <Input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} placeholder="12345"/>
                <button type="button" className="absolute right-3 top-10" onClick={togglePasswordVisibility}>
                    <img src={showPassword ? hidePassIcon : showPassIcon} alt="Toggle Password" className="w-6 h-6"/>
                </button>
            </div>

            <Button text="Iniciar sesión" className="w-full bg-[#266bb4] text-white py-3 rounded-md hover:bg-[#52738c] transition" />
        </form>
    );
}

export default FormLogin;