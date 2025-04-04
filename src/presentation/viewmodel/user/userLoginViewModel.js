import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { mostrarAlertaExito, mostrarAlertaError } from "../../../utils/alerts";
import { LOGIN_SUCCESS, LOGIN_FAILED } from "../../../utils/messages";

const API_URL = import.meta.env.VITE_API_AIRSAFE_URL.replace(/\/$/, "");

export function useLoginViewModel() {
    const [formData, setFormData] = useState({
        usuario: "",
        contrasena: ""
    });

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await axios.post(`${API_URL}/auth/login`, formData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const data = response.data;

            if (data.token) {
                sessionStorage.setItem("token", data.token);
                sessionStorage.setItem("user", JSON.stringify(data.user));
                sessionStorage.setItem("role", JSON.stringify(data.role));
                sessionStorage.setItem("id", JSON.stringify(data.id));

                mostrarAlertaExito(LOGIN_SUCCESS.titulo, LOGIN_SUCCESS.texto);

                navigate("/home");
            } else {
                throw new Error("No se recibió token");
            }

        } catch (err) {
            const message = err.response?.data?.message || LOGIN_FAILED.texto;
            setError(message);

            mostrarAlertaError(LOGIN_FAILED.titulo, message);
        } finally {
            setLoading(false);
        }
    };

    return {
        formData,
        showPassword,
        loading,
        error,
        handleChange,
        togglePasswordVisibility,
        handleSubmit
    };
}