import axios from 'axios';

export const updatePost = async (_id: string, title: string, body: string) => {
    try {
        const response = await axios.put(`http://localhost:5000/api/edit-post/${_id}`, {
            title,
            body,
        }, {
            withCredentials: true,
        });

        return response.data;
    } catch (error) {
        console.error("Error updating post", error);
        throw error;
    }
};