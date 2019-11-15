import * as React from 'react'
import ItemList from '../itemList/itemList';
import CharDetails, {Field} from '../charDetails/charDetails';
import ErrorMessage from '../errorMessage/errorMessage'
import gotService from './../../services/gotService'
import RowBlock from './../rowBlock/rowBlock'

interface IPropState{
  selected: number,
  error: boolean
}

export default class characterPage extends React.Component<any, IPropState> {

  gotService = new gotService()

  state = {
    selected: 125,
    error: false
  }

  componentDidCatch() {
    this.setState({error: true})
  } 

  onCharSelected = (id) => {
    this.setState({selected: id})
  }

  render() {

    if(this.state.error) return <ErrorMessage errStatus=''/>

    const itemList = (
      <ItemList 
        onCharSelected = {this.onCharSelected}
        getData = {this.gotService.getAllCharacters}
        renderData = {(item) => `${item.name}(${item.gender})`}/>
    )

    const charDetails = (
      <CharDetails charId={this.state.selected}>
        <Field field='gender' label='Gender'></Field>
        <Field field='born' label='Born'></Field>
        <Field field='died' label='Died'></Field>
        <Field field='culture' label='Culture'></Field>
      </CharDetails>

    )

    return (
      <RowBlock itemList={itemList} charDetails={charDetails} />
    )
  }
}