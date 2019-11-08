import React from 'react';
import './modal-edit.scss';
import { Button, Input } from 'reactstrap';

export default class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
    this.onKeyPress = this.onKeyPress.bind(this)
  }

  // textValue() {
  //   document.querySelector('#app-list-item-label').innerHTML = this.state.text;
  // }

  onKeyPress(event) {
    if (event.key === 'Enter') {
      // this.setState({text: event.target.value})
    } 
  }

  render() {
    const extModal = this.props.extModal;
    const onUpdateLabel = this.props.onUpdateLabel
    const id = this.props.id
    return (
      <div className={extModal}>
        <Input type='text' className='modal__input' onKeyPress={this.onKeyPress} placeholder='change text' onChange={event => this.setState({ text: event.target.value})}></Input>
        <Button color="primary" size="sm" outline onClick={()=>onUpdateLabel(id, this.state.text)}><i className="fa fa-send-o"></i></Button>
      </div>
    )
  }
}