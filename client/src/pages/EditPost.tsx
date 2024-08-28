import React, { FC, useEffect, useState } from 'react';
import "../styles/styles.scss";
import Button from '../components/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { updatePost } from '../API/PostUpdate';
import { fetchPostsId } from '../API/FetchPostId';
import { deletePost } from '../API/PostDelete';

const EditPost: FC = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const { _id } = useParams<string>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if(!_id) {
      setError("Post ID is missing");
      setLoading(false);
      return;
    }
    const loadPostData = async () => {
      try {
        const post = await fetchPostsId(_id);
        setTitle(post.title);
        setBody(post.body);
      } catch (error) {
        console.error("Failed to load post data", error);
      }
    };
    loadPostData();
  }, [_id]);

  const handleUpdatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if(!_id) {
        setError("Post ID is missing");
        setLoading(false);
        return;
      }
        const updatedPost = await updatePost(_id, title, body);
        console.log("Post updated successfully", updatedPost);
        navigate('/admin/dashboard');
    } catch (error) {
        console.error("Failed to update post", error);
    }
  };

  const handleDeletePost = async () => {
    try {
        if(!_id) {
            setError("Post ID is missing");
            setLoading(false);
            return;
        }
        const deletedPost = await deletePost( _id );
        console.log("Post updated successfully", deletedPost);
        navigate('/admin/dashboard');
    } catch (error) {
      setError("Failed to delete post");
      console.error("Failed to update post", error);
    } 
  };

  return (
    <div>
        <Button onClick={() => navigate(-1)} className='button-back' role="button">Go back</Button>
        <div className='admin-title'>
            <h2>View / Edit Post</h2>
            <Button 
              onClick={handleDeletePost}
              className='btn-delete btn'
            >
              Delete
            </Button>
        </div>
        <form onSubmit={handleUpdatePost}>
            <label htmlFor="title"><b>Title</b></label>
            <input 
              type="text" 
              placeholder='Post Title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <label htmlFor="body"><b>Content</b></label>
            <textarea 
              value={body}
              cols={50} 
              rows={10}
              onChange={(e) => setBody(e.target.value)}
            />

            <input type="submit" className='btn'/>
        </form>
    </div>
  )
}

export default EditPost;