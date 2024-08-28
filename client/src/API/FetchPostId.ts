import axios from "axios";

export const fetchPostsId = async (_id: string) => {
    try {
        const response = await axios.get(`http://localhost:5000/api/posts/${_id}`);
        console.log("API call response:", response.data);
        return response.data;
    } catch (error) {
        console.log("Error with PostId ", error);
        throw error;
    }
};