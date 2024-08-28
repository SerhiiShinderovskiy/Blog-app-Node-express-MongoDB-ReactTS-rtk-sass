import React, { FC, useEffect, useState } from 'react';
import Button from '../components/Button';
import "../styles/styles.scss";
import "../styles/styles_for_btn_add_new.scss";
import { fetchAdminDashboard } from '../API/FetchAdminDashboard';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { setPosts } from '../store/Slices/postSlice';
import { useNavigate } from 'react-router-dom';
import { deletePost } from '../API/PostDelete';

const AdminPage: FC = () => {
    const posts = useAppSelector(state => state.post.posts);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const loadPosts = async () => {
            try {
                const { posts, totalPages } = await fetchAdminDashboard(currentPage);
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

    const handleCreatePost = () => {
        navigate('/add-new-post');
    };

    const handleClick = (postId: string | number) => {
        if (postId) {
          navigate(`/edit-post/${postId}`);
        } else {
          console.error('Post ID is missing');
        }
    };
    
    const handleDelete = async (postId: string | number) => {
        try {
            await deletePost(postId);
            const { posts, totalPages } = await fetchAdminDashboard(currentPage);
            dispatch(setPosts(posts));
            setTotalPages(totalPages);
        } catch (error) {
            console.error("Error deleting post", error);
        }
    };

  return (
    <div>
        <div className='admin-title'>
            <h2>Posts</h2>
            <Button onClick={handleCreatePost} className='button-add-new' role="button"><span className="text">+ Add new</span></Button>
        </div>
        {posts.length > 0 ? (
            <ul className='admin-posts'>
                {posts.map(post => (
                        <li key={post._id}>
                            <h3>{post.title}</h3>
                            <div className='admin-post-controls'>
                                <Button 
                                    onClick={() => handleClick(post._id)} 
                                    className='btn'
                                >
                                    Edit
                                </Button>
                                <Button onClick={() => handleDelete(post._id)} className='btn'>
                                    Delete
                                </Button>
                            </div>
                        </li>
                    ))
                }
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
        </ul>
        ) : (
            <p>No posts available</p>
        )}
    </div>
  )
}

export default AdminPage;