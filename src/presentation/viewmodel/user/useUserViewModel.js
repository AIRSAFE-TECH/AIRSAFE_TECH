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

            const usersResponse = await axios.get("http://localhost:8080/comprador");
            const usersData = usersResponse.data;

            const adminsResponse = await axios.get("http://localhost:8080/admin");
            const adminsData = adminsResponse.data;

            setUsers(usersData);
            setAdmins(adminsData);
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