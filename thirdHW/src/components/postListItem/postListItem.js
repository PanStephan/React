import React from 'react';
import './post-list-item.scss';

class PostListItem extends React.Component {
  render() {
    return (
      <li className="app-list-item d-flex justify-content-between">
        <span className="app-list-item-label">
          item
          <span className="post-list-item__time">{new Date().toLocaleTimeString()}</span>
        </span>
        <div className="d-flex justify-content-center align-items-center">
          <button type="button" className="btn-star btn-sm">
            <i className="fa fa-star"></i>
          </button>
          <button type="button" className="btn-trash btn-sm">
            <i className="fa fa-trash-o"></i>
          </button >
          <i className="fa fa-heart"></i>
        </div>
      </li>
    )
  }
}

export default PostListItem