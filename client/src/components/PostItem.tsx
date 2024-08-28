import React, { FC } from 'react'
import "../styles/styles.scss";
import { PropsPostItem } from '../types/typesForPosts';
import { useNavigate } from 'react-router-dom';

const PostItem: FC<PropsPostItem> = ({post}) => {
  let navigate = useNavigate();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toDateString()
  };

  const handleClick = () => {
    if (post._id) {
      navigate(`/posts/${post._id}`);
    } else {
      console.error('Post ID is missing');
    }
  };

  return (
    <li>
        <span onClick={handleClick}>{post.title}</span>
        <span className="article-list-date">
          {formatDate(post.createdAt)}
        </span>
    </li>
  );
};

export default PostItem;