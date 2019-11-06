import React from 'react';
import './post-status-filter.scss'

const PostStatusFilter = () => {
  return (
    <div className="btn-group">
      <button type="text" className='btn btn-info'>All</button>
      <button type="text" className='btn btn-outline-secondary'>Liked</button>
    </div>
  )
}

export default PostStatusFilter