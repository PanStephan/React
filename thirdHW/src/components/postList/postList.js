import React from 'react';
import './post-list.scss';
import PostListItem from '../postListItem/postListItem';

export default class PostList extends React.Component {
  constructor(props) {
    super(props)
    this.isObject = this.isObject.bind(this)
  }
  isObject(obj) {
    return obj != null && obj.constructor.name === 'Object'
  }

  render() {
    const {posts} = this.props;
    const elements = posts.filter(el => {
      return this.isObject(el)
    }).map(item => {
      const{id, ...itemProps} = item;
      return (
        <li key={id} className='list-group-item'>
          <PostListItem {...itemProps}  />
        </li>
      )
    })
    
    return (
      <ul className="app-list list-group">
        {elements}
      </ul>
    )
  }
}