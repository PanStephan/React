import * as React from 'react'

export default class ItemList extends React.Component<any> {

  render() {
    const{text, toggleTodo, completed} = this.props
    return(
      <div >
        <div onClick={toggleTodo} className={completed ? 'item-list__text--active item-list__text' : 'item-list__text'}>{text}</div>
        <span className='item-list__line'></span>
      </div>
    )
  }
}

