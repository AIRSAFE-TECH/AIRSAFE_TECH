import axios from "axios";
const API_URL = import.meta.env.VITE_API_AIRSAFE_URL.replace(/\/$/, "");

export class UserApiDataSource {
    async loginUser(credentials) {
        const response = await axios.post(`${API_URL}/auth/login`, credentials, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        return response.data;
    }
}