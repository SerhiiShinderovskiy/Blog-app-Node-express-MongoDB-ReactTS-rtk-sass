import axios from "axios";

const API_URL = 'http://localhost:5000';

export const getPosts = async () => {
    try {
        const response = await axios.get(`${API_URL}/posts`);
        return response.data;
    } catch (error) {
        console.log("Error fetching request posts ", error);
        throw error;
    }
};