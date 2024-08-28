import React, { FC, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { IPost } from '../types/typesForPosts';
import Button from '../components/Button';
import { fetchPostsId } from '../API/FetchPostId';
import Loader from '../components/Loader';
import "../styles/style_for_btn.scss";

const PostIdPage: FC = () => {
  const { _id } = useParams<string>();
  const navigate = useNavigate();
  const [post, setPost] = useState<IPost>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if(!_id) {
      setError("Post ID is missing");
      setLoading(false);
      return;
    }
    
    const fetchPostById = async (_id: string) => {
      try {
        setLoading(true);
        const response = await fetchPostsId(_id);
        setPost(response);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError("Failed to fetch post.")
        console.log('Failed to fetch post: ', error);
      }
    }

    if (_id) {
      fetchPostById(_id);
    }
  }, [_id])

  if (loading) {
    return <div><Loader/>Loading...</div>;
  }

  if (error) {
      return <div>{error}</div>;
  }

  if (!post) {
    return <div>No post found</div>;
  }

  return (
    <div>
      <Button onClick={() => navigate(-1)} className='button-back' role="button">Go back</Button>
      <h1>{post.title}</h1>
      <article className='article'>
          {post.body}
      </article>
    </div>
  )
}

export default PostIdPage;