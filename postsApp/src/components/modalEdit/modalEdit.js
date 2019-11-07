import React from 'react';
import './modal-edit.scss';
import { Button, Input } from 'reactstrap';

export default class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.textValue = this.textValue.bind(this);
    this.state = {
      text: ''
    }
  }

  textValue() {
    document.querySelector('#app-list-item-label').innerHTML = this.state.text;
  }

  render() {
    const extModal = this.props.extModal;
    return (
      <div className={extModal}>
        <Input type='text' className='modal__input' placeholder='change text' onChange={event => this.setState({ text: event.target.value})}></Input>
        <Button color="primary" size="sm" outline onClick={this.textValue}><i className="fa fa-send-o"></i></Button>
      </div>
    )
  }
}