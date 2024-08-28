import axios from 'axios';

export const createPost = async (title: string, body: string) => {
    try {
        const response = await axios.post('http://localhost:5000/api/add-new-post', {
            title,
            body,
        }, {
            withCredentials: true,
        });

        return response.data;
    } catch (error) {
        console.error("Error creating post", error);
        throw error;
    }
};