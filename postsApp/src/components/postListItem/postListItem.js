import React from 'react';
import './post-list-item.scss';
import ModalEdit from '../modalEdit/modalEdit';
import ModalDelete from '../modalDelete/modalDelete'

import styled from 'styled-components';
import { Button } from 'reactstrap';

const SpanListItem = styled.span`
  display: block;
  line-height: 35px;
  cursor: pointer;
  user-select: none;
  transition: 0.5s all;
`

const DivListTime = styled.div`
  display: block;
`

export default class PostListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onOpenEdit: false,
      onOpenDelete: false
    }
    this.onOpenModalEdit = this.onOpenModalEdit.bind(this);
    this.onOpenModalDelete = this.onOpenModalDelete.bind(this)
  }

  onOpenModalEdit() {
    this.setState(({onOpenEdit}) => ({
      onOpenEdit: !onOpenEdit
    }));
  }

  onOpenModalDelete() {
    this.setState(({onOpenDelete}) => (
      {
        onOpenDelete: !onOpenDelete
      }
    ))
  }

  render() {
    const {label, onDelete, onToggleImportant, onToggleLiked, important, like, onUpdateLabel, id} = this.props;
    const {onOpenEdit, onOpenDelete} = this.state
    let classNames = 'app-list-item d-flex justify-content-between';
    let extModal = 'ext-modal';
    let modalDelete = 'modal-overlay'
    important ? classNames += ' important' : '';
    like ? classNames += ' like' : '';
    onOpenEdit ? extModal += ' ext-modal--open' : '';
    onOpenDelete ? modalDelete += ' modal-delete--open' : ''
    console.log(id)

    return (
      <div className={classNames}>
        <div>
          <SpanListItem id='app-list-item-label' onClick={onToggleLiked}>
            {label}
          </SpanListItem>
          <DivListTime className="post-list-item__time">{new Date().toLocaleTimeString()}</DivListTime>
        </div>
        <ModalEdit extModal={extModal} onUpdateLabel={onUpdateLabel} id={id}/>
        <ModalDelete modalDelete={modalDelete} onOpenModalDelete={this.onOpenModalDelete} onDelete={onDelete}/>
        <div className="d-flex justify-content-center align-items-center">
          <Button color="link" className='btn-pen' onClick={this.onOpenModalEdit}>
            <i className="fa fa-pencil"></i>
          </Button>
          <Button color="link"
          className="btn-star"
          size="sm"
          onClick={onToggleImportant}>
            <i className="fa fa-star"></i>
          </Button>
          <Button type="button" className="btn-trash" size="sm" color="link"
          onClick={this.onOpenModalDelete}>
            <i className="fa fa-trash-o"></i>
          </Button>
          <i className="fa fa-heart"></i>
        </div>
      </div>
    )
  }
}
