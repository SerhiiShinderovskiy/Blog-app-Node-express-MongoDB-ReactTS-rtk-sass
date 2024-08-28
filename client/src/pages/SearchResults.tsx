import React, { FC } from 'react'
import { IPost } from '../types/typesForPosts';
import { useLocation } from 'react-router-dom';

const SearchResults: FC = () => {
    const location = useLocation();
    const results = location.state?.results as IPost[];

  return (
    <div>
        <div className='author'>
            <h1 className='author-heading'>Search Results</h1>
        </div>
        <section className='articles'>
            <ul className='article-ul'>
                {results?.length ? (
                    results.map(post => (
                        <li key={post._id}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </li>
                    ))
                ) : (
                    <li>No results found</li>
                )}
            </ul>
        </section>
    </div>
  )
}

export default SearchResults;