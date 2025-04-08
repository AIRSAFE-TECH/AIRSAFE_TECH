import { useState, useEffect } from "react";
import axios from "axios";

export default function useUserViewModel() {
    const [users, setUsers] = useState([]);
    const [admins, setAdmins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchUsersAndAdmins = async () => {
        try {
            setLoading(true);
            setError(null);

            const ADMIN_URL = import.meta.env.VITE_API_AIRSAFE_ADMIN_URL;
            const COMPRADOR_URL = import.meta.env.VITE_API_AIRSAFE_COMPRADOR_URL;

            const [usersResponse, adminsResponse] = await Promise.all([
                axios.get(COMPRADOR_URL),
                axios.get(ADMIN_URL),
            ]);

            setUsers(Array.isArray(usersResponse.data) ? usersResponse.data : []);
            setAdmins(Array.isArray(adminsResponse.data) ? adminsResponse.data : []);
        } catch (error) {
            setError("Error al obtener los datos de los usuarios.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsersAndAdmins();
    }, []);

    return {
        users,
        admins,
        loading,
        error,
        fetchUsersAndAdmins,
    };
}