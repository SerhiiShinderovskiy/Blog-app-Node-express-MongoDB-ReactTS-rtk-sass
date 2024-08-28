import axios from "axios";

export const fetchResults = async (searchTerm: string) => {
    try {
        const response = await axios.post(`http://localhost:5000/api/posts/search`, { searchTerm });
        return response.data;
    } catch (error) {
        console.log("Error with search ", error);
        throw error;
    }
};