import React from 'react';
import './modal-edit.scss';
import { Button, Input } from 'reactstrap';

export default class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  render() {
    const extModal = this.props.extModal;
    const onUpdateLabel = this.props.onUpdateLabel
    const id = this.props.id
    return (
      <div className={extModal}>
        <Input type='text' className='modal__input' onKeyPress={(e) => {if( e.key === 'Enter') onUpdateLabel(id, this.state.text) }} placeholder='change text' onChange={event => this.setState({ text: event.target.value})}></Input>
        <Button color="primary" size="sm" outline onClick={()=>onUpdateLabel(id, this.state.text)}><i className="fa fa-send-o"></i></Button>
      </div>
    )
  }
}