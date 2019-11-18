import * as React from 'react'
import ItemList from '../../itemList/itemList';
import Details, {Field} from '../../details/details';
import ErrorMessage from '../../errorMessage/errorMessage'
import gotService from '../../../services/gotService'
import RowBlock from '../../rowBlock/rowBlock'
import {withRouter} from 'react-router-dom'

interface IPropState{
  error: boolean
}

class BookPage extends React.Component<any, IPropState> {

  gotService = new gotService()

  state = {
    error: false
  }

  componentDidCatch() {
    this.setState({error: true})
  } 

  render() {

    if(this.state.error) return <ErrorMessage/>

    return (
      <ItemList 
        onItemSelected={(itemId) => {
          this.props.history.push(itemId)
        }}
        getData = {this.gotService.getAllBooks}
        renderData = {(item) => `${item.name}`}/>
    )
  }
}

export default withRouter(BookPage)