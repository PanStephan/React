import React from 'react';
import './post-list.scss';
import PostListItem from '../PostListItem/PostListItem';

const postList = () => {
  return (
    <ul className="app-list list-group">
      <PostListItem/>
      <PostListItem/>
      <PostListItem/>
    </ul>

  )
}

export default postList;