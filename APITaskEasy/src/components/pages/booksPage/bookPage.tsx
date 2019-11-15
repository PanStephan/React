import * as React from 'react'
import ItemList from '../../itemList/itemList';
import Details, {Field} from '../../details/details';
import ErrorMessage from '../../errorMessage/errorMessage'
import gotService from '../../../services/gotService'
import RowBlock from '../../rowBlock/rowBlock'

interface IPropState{
  selected: number,
  error: boolean
}

export default class BookPage extends React.Component<any, IPropState> {

  gotService = new gotService()

  state = {
    selected: 2,
    error: false
  }

  componentDidCatch() {
    this.setState({error: true})
  } 

  onSelected = (id) => {
    this.setState({selected: id})
  }

  render() {

    if(this.state.error) return <ErrorMessage errStatus=''/>

    const itemList = (
      <ItemList 
        onSelected = {this.onSelected}
        getData = {this.gotService.getAllBooks}
        renderData = {(item) => `${item.name}`}/>
    )

    const detailses = (
      <Details id={this.state.selected} data={this.gotService.getBooks} text="choose book">
        <Field field='name' label='Name'></Field>
        <Field field='numberOfPages' label='NumberOfPages'></Field>
        <Field field='publiser' label='Publiser'></Field>
        <Field field='released' label='Released'></Field>
      </Details>
    )

    return (
      <RowBlock itemList={itemList} details={detailses} />
    )
  }
}