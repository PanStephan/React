import * as React from 'react'
import Button from '../button/button'
import {connect} from 'react-redux'
import {addTodo} from '../../actions'

interface IPropFromItem {
  data: string
}

class FromItem extends React.Component<any, IPropFromItem> {

  state = {
    data: null
  }

  onDataChange = (e) => {
    this.setState({data: e.target.value})
  }

  onSubmitAdd = (e) => {
    e.preventDefault()
    const {data} = this.state
    if (!data) {
      return
    }
    this.props.dispatch(addTodo(data))
    this.setState({data: null})
  }

  render() {
    return(
      <form onSubmit={this.onSubmitAdd}>
        <input type="text" className='form__input' placeholder='Enter a new todo item' onChange={this.onDataChange}/>
        <div className='form-controllers'>
          <Button name={'btn-hide-item'} label={'Hide completed'}/>
          <Button name={'btn-add-item'} label={'Add new'}/>
        </div>
      </form>
    )
  }
}

export default connect()(FromItem)