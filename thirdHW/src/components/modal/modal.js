import React from 'react';
import './modal.scss';

export default class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.textValue = this.textValue.bind(this);
  }

  textValue() {
    document.querySelector('.app-list-item-label').innerHTML = this.text.value;
    this.text.value = '';
  }

  render() {
    const extModal = this.props.classes;
    return (
      <div className={extModal}>
        <input type='text' className='form-control modal__input' placeholder='change text' ref={el => this.text = el}></input>
        <button type='text' className='btn'><i className="fa fa-send-o" onClick={this.textValue}></i></button>
      </div>
    )
  }
}