import React, { FC, useState } from 'react';
import "../styles/styles.scss";
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../API/PostCreate';

const AddNewPost: FC = () => {
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        const post = await createPost(title, body);
        console.log("Post created:", post);
        navigate('/admin/dashboard');
    } catch (error) {
        console.error("Failed to create post:", error);
    }
  }

  return (
    <div>
        <Button onClick={() => navigate(-1)} className='button-back' role="button">Go back</Button>
        <div className='admin-title'>
            <h2>Add New Post</h2>
        </div>
        <form onSubmit={handleSubmit}>
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
              onChange={(e) => setBody(e.target.value)}
              cols={50} 
              rows={10}
            />

            <input type="submit" className='btn'/>
        </form>
    </div>
  )
}

export default AddNewPost;