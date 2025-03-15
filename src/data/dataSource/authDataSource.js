// src/data/dataSource/authDataSource.js
export const authDataSource = {
    login: async (email, password) => {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) throw new Error('Error en la autenticación');

        return await response.json();
    },

    logout: () => {
        sessionStorage.removeItem('token');
    }
};