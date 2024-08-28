import axios from 'axios';

export const deletePost = async (_id: string | number) => {
    try {
        const response = await axios.delete(`http://localhost:5000/api/delete-post/${_id}`, 
        {
            withCredentials: true,
        });

        return response.data;
    } catch (error) {
        console.error("Error deleting post", error);
        throw error;
    }
};