import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { UserApiDataSource } from "../../../data/dataSource/UserApiDataSource";
import { UserRepositoryImpl } from "../../../data/repository/UserRepositoryImpl.js";
import { LoginUserUseCase } from "../../../domain/useCases/LoginUserUseCase";

import { mostrarAlertaExito, mostrarAlertaError } from "../../../utils/alerts";
import { LOGIN_SUCCESS, LOGIN_FAILED } from "../../../utils/messages";

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
        setShowPassword(prev => !prev);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const api = new UserApiDataSource();
            const repo = new UserRepositoryImpl(api);
            const loginUseCase = new LoginUserUseCase(repo);

            const userEntity = await loginUseCase.execute(formData);

            if (userEntity.token) {
                sessionStorage.setItem("token", userEntity.token);
                sessionStorage.setItem("user", JSON.stringify(userEntity.user));
                sessionStorage.setItem("role", JSON.stringify(userEntity.role));
                sessionStorage.setItem("id", JSON.stringify(userEntity.id));

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