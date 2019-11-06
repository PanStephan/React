import React from 'react';
import './post-list-item.scss';
import Modal from '../modal/modal';

export default class PostListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      important: false,
      like: false,
      openModal: false
    }
    this.onImportant = this.onImportant.bind(this);
    this.onLike = this.onLike.bind(this);
    this.onOpen = this.onOpen.bind(this);
  }

  onImportant() {
    this.setState(({important}) => ({
      important: !important
    }));
  }

  onLike() {
    this.setState(({like}) => ({
      like: !like
    }));
  }

  onOpen() {
    this.setState(({openModal}) => ({
      openModal: !openModal
    }));
  }

  render() {
    const {label} = this.props;
    const {important, like, openModal} = this.state
    let classNames = 'app-list-item d-flex justify-content-between';
    let extModal = 'ext-modal';
    important ? classNames += ' important' : '';
    like ? classNames += ' like' : '';
    openModal ? extModal += ' ext-modal--open' : '';

    return (
      <div className={classNames}>
        <div>
          <span className="app-list-item-label" onClick={this.onLike}>
            {label}
          </span>
          <div className="post-list-item__time">{new Date().toLocaleTimeString()}</div>
        </div>
        <Modal classes={extModal}/>
        <div className="d-flex justify-content-center align-items-center">
          <button type='button' className='btn btn-pen' onClick={this.onOpen}>
            <i className="fa fa-pencil"></i>
          </button>
          <button 
          type="button" 
          className="btn-star btn-sm"
          onClick={this.onImportant}>
            <i className="fa fa-star"></i>
          </button>
          <button type="button" className="btn-trash btn-sm">
            <i className="fa fa-trash-o"></i>
          </button>
          <i className="fa fa-heart"></i>
        </div>
      </div>
    )
  }
}
