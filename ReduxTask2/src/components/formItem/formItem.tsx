import * as React from 'react'
import Button from '../button/button'
import ButtonFilter from '../containers/filterContainer'
import {connect} from 'react-redux'
import {addTodo} from '../../actions'
import { VisibilityFilters } from '../../actions'

interface IPropFormItem {
  data: string
}

class FormItem extends React.Component<any, IPropFormItem> {

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
          <ButtonFilter name={'btn-hide-item'} label={'Hide completed'} type={'button'} onClick={console.log('dd')}/>
          <Button name={'btn-add-item'} label={'Add new'} type={'submit'}/>
        </div>
      </form>
    )
  }
}

export default connect()(FormItem)