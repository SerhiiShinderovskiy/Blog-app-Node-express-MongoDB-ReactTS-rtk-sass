export const fetchAdminLogin = async (username: string, password: string) => {
    try {
        const response = await fetch('http://localhost:5000/api/admin/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
            credentials: 'include',
        });
        if (!response.ok) {
            throw new Error('Login failed');
        }
        const data = await response.json();
        console.log("response: ", response);
        return data;
    } catch (error) {
        console.error("Login Failed", error);
        throw error;
    }
};