import React from 'react';
import './modal-edit.scss';
import { Button, Input } from 'reactstrap';

export default class PostList extends React.Component {
  state = {
      text: '',
    }

  render() {
    const {extModal, onUpdateLabel, onOpenModalEdit, id} = this.props
    return (
      <div className={extModal}>
        <Input type='text' className='modal__input' onKeyPress={(e) => {if( e.key === 'Enter'){ onUpdateLabel(id, this.state.text, onOpenModalEdit)}}} placeholder='change text' onChange={event => this.setState({ text: event.target.value})} value={this.state.text}></Input>
        <Button color="primary" size="sm" outline onClick={()=> {onUpdateLabel(id, this.state.text, onOpenModalEdit)}}><i className="fa fa-send-o"></i></Button>
      </div>
    )
  }
}