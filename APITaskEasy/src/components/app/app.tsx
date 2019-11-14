import * as React from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header/header';
import RandomChar from '../randomChar/randomChar';
import CharacterPage from '../characterPage/characterPage'
import ErrorMessage from './../errorMessage/errorMessage'

interface IPropState {
	showRandomChar: boolean,
	error: boolean
}

export default class App extends React.Component<any, IPropState>{

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
					{/* <Button onClick={this.onClickButton}>Delete Random char</Button> */}
					<Header onClickButton={this.onClickButton}/>
				</Container>
				<Container>
						<Row>
							<Col lg={{size: 5, offset: 0}}>
								{showRandomChar && <RandomChar/>}
							</Col>
						</Row>
						<CharacterPage/>
				</Container>
			</>
		)
	}
};