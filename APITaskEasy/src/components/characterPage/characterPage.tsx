import * as React from 'react'
import ItemList from '../itemList/itemList';
import CharDetails from '../charDetails/charDetails';
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
      <CharDetails charId={this.state.selected}/>
    )

    return (
      <RowBlock itemList={itemList} charDetails={charDetails} />
    )
  }
}