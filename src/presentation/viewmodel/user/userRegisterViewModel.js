import { useState } from "react";
import axios from "axios";
import { mostrarAlertaExito, mostrarAlertaError } from "../../../utils/alerts";

const API_URL = import.meta.env.VITE_API_AIRSAFE_COMPRADOR_URL + "/create";

export function useRegisterViewModel() {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        telefono: "",
        password: "",
        confirmPassword: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
    
        if (name === "telefono") {
            const onlyNumbers = value.replace(/\D/g, "");
            if (onlyNumbers.length <= 10) {
                setFormData({ ...formData, telefono: onlyNumbers });
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };
    
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        const dataToSend = {
            usuario: formData.nombre,
            email: formData.email,
            telefono: formData.telefono,
            contrasena: formData.password,
        };

        try {
            const response = await axios.post(API_URL, dataToSend, {
                headers: { "Content-Type": "application/json" }
            });

            console.log("Registro exitoso:", response.data);
            mostrarAlertaExito("¡Usuario creado con éxito!", "Tu cuenta se ha registrado correctamente.");
            
            setFormData({
                nombre: "",
                email: "",
                telefono: "",
                password: "",
                confirmPassword: "",
            });
        } catch (error) {
            console.error("Error al registrar:", error.response ? error.response.data : error.message);
            mostrarAlertaError("Error al registrar", "Intenta de nuevo más tarde.");
        }
    };

    return {
        formData,
        showPassword,
        showConfirmPassword,
        handleChange,
        togglePasswordVisibility,
        toggleConfirmPasswordVisibility,
        handleSubmit
    };
}