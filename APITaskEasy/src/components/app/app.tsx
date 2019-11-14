import * as React from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header/header';
import RandomChar from '../randomChar/randomChar';
import CharacterPage from '../characterPage/characterPage'
import ErrorMessage from './../errorMessage/errorMessage'
import ItemList from '../itemList/itemList';
import CharDetails from '../charDetails/charDetails';
import gotService from './../../services/gotService'

interface IPropState {
	showRandomChar: boolean,
	error: boolean
}

export default class App extends React.Component<any, IPropState>{

	gotService = new gotService()

	state = {
		showRandomChar: true,
		error: false
	}

	componentDidCatch() {
		this.setState({error: true})
	}

	onClickButton = () => {
		this.setState({showRandomChar: !this.state.showRandomChar})
	}

	render() {

		const {showRandomChar, error} = this.state
		if(error) return <ErrorMessage errStatus=''/>

		return (
			<> 
				<Container>
					<Header onClickButton={this.onClickButton}/>
				</Container>
				<Container>
						<Row>
							<Col lg={{size: 5, offset: 0}}>
								{showRandomChar && <RandomChar/>}
							</Col>
						</Row>
						<CharacterPage/>
						<Row>
							<Col md='6'> 
								<ItemList
									getData={this.gotService.getAllBooks}
									renderData = {(item) => item.name}/>
							</Col>
							<Col md='6'> 
							</Col>
						</Row>
						<Row>
							<Col md='6'> 
								<ItemList 
								getData={this.gotService.getAllHouses}
								renderData = {(item) => item.name}/>
							</Col>
							<Col md='6'> 
							</Col>
						</Row>
				</Container>
			</>
		)
	}
};