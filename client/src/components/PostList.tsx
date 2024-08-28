import { FC, useEffect, useState } from "react";
import PostItem from "./PostItem";
import Button from "./Button";
import { PostListProps } from "../types/typesForPosts";
import { useAppDispatch } from "../hooks/hooks";
import { setPosts } from "../store/Slices/postSlice";
import { fetchPosts } from "../API/FetchPosts";
 
const PostList: FC<PostListProps> = ({posts}) => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [totalPages, setTotalPages] = useState<number>(0)
    const dispatch = useAppDispatch()

    useEffect(() => {
        const loadPosts = async () => {
            try {
                const { posts, totalPages } = await fetchPosts(currentPage);
                dispatch(setPosts(posts));
                setTotalPages(totalPages);
            } catch (error) {
                console.log("Error fetching posts:", error);
            }
        }
        loadPosts();
    }, [currentPage, dispatch]);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return ( 
        <div>
            <section className="articles">
                <h2 className="articles-heading">Latest Posts</h2>
                <div>
                    <ul className="article-ul">
                        {Array.isArray(posts) && posts.map((post: any) => 
                            <PostItem key={post._id} post={post}/>
                        )}
                    </ul>
                </div>
                <Button
                    onClick={handlePrevPage} 
                    disabled={currentPage === 1}
                    className="pagination"
                >
                    View Newer Posts
                </Button>
                <Button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="pagination-newer"
                >
                    View Older posts
                </Button>
            </section>
        </div>
    );
}
 
export default PostList;