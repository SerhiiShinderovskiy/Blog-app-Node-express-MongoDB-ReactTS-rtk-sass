import axios from "axios";

export const fetchPosts = async (page: number) => {
    try {
        const response = await axios.get(`http://localhost:5000/api/posts?page=${page}&limitOnPage=10`);
        const {posts, totalPages} = response.data;
        return { posts, totalPages };
    } catch (error) {
        console.log("Error with pagination ", error);
        throw error;
    }
};