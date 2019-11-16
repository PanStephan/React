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

export default class HousesPage extends React.Component<any, IPropState> {

  gotService = new gotService()

  state = {
    selected: 50,
    error: false
  }

  componentDidCatch() {
    this.setState({error: true})
  } 

  onItemSelected = (id) => {
    this.setState({selected: id})
  }

  render() {

    if(this.state.error) return <ErrorMessage />

    const itemList = (
      <ItemList 
        onItemSelected = {this.onItemSelected}
        getData = {this.gotService.getAllHouses}
        renderData = {(item) => `${item.name}`}/>
    )

    const detailses = (
      <Details id={this.state.selected} data={this.gotService.getHouses} text="choose houses">
        <Field field='region' label='Region'></Field>
      </Details>
    )

    return (
      <RowBlock itemList={itemList} details={detailses} />
    )
  }
}