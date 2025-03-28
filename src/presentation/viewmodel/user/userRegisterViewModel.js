import { useState } from "react";

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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos enviados:", formData);
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