import React from 'react';
import './post-list.scss';
import PostListItem from '../postListItem/postListItem';

import { ListGroup, ListGroupItem  } from 'reactstrap';

export default class PostList extends React.Component {

  render() {
    const {posts, onDelete, onToggleImportant, onToggleLiked, onUpdateLabel, createNewData} = this.props;
    const elements = posts.map(item => {
      const{id, ...itemProps} = item;
      return (
        <ListGroupItem key={id} className='list-group-item'>
          <PostListItem {...item}
          onDelete={() => onDelete(id)}
          // onToggleImportant={() => onToggleImportant(id)}
          // onToggleLiked={() => onToggleLiked(id)}
          createNewData={createNewData}
          onUpdateLabel={onUpdateLabel}/>
        </ListGroupItem>
      )
    })
    
    return (
      <ListGroup className="app-list list-group">
        {elements}
      </ListGroup>
    )
  }
}