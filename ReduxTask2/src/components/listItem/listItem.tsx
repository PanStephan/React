import * as React from 'react'

export default class ItemList extends React.Component<any> {

  onListItemClick = () => {

  }

  render() {
    const{id, text, completed} = this.props
    console.log(id)
    return(
      <div onClick={this.onListItemClick}>
        <div className='item-list__text'>text</div>
        <span className='item-list__line'></span>
      </div>
    )
  }
}
