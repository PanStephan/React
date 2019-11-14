import * as React from 'react'
import {Col, Row} from 'reactstrap';
import ItemList from '../itemList/itemList';
import CharDetails from '../charDetails/charDetails';
import ErrorMessage from '../errorMessage/errorMessage'

interface IPropState{
  selected: number,
  error: boolean
}
export default class characterPage extends React.Component<any, IPropState> {

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

    return (
      <Row>
        <Col md='6'>
          <ItemList onCharSelected={this.onCharSelected}/>
        </Col>
        <Col md='6'>
          <CharDetails charId={this.state.selected}/>
        </Col>
      </Row>
    )
  }
}