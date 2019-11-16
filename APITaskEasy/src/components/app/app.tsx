import * as React from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header/header';
import RandomChar from '../randomChar/randomChar';
import CharacterPage from '../pages/characterPage/characterPage'
import BookPage from '../pages/booksPage/bookPage'
import HousesPage from '../pages/housesPage/housesPage'
import ErrorMessage from './../errorMessage/errorMessage'
import gotService from './../../services/gotService'
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom'
import BooksItem from '../pages/booksPage/booksItem'
import { number } from 'prop-types';

interface IPropState {
	showRandomChar: boolean,
	error: boolean
}

class RandBlock extends React.Component {
	render() {
		return (
			<Row>
				<Col lg={{size: 5, offset: 0}}>
					{this.props.showRandomChar && <RandomChar/>}
				</Col>
			</Row>
		)
	}
}
export default class App extends React.Component<any, IPropState> {

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
		if(error) return <ErrorMessage/>

		return (
			<Router> 
				<div className='app'>
					<Container>
						<Header onClickButton={this.onClickButton}/>
					</Container>
					<Container>
						<RandBlock showRandomChar={showRandomChar}/>
						<Switch>
							<Route path='/' exact component={() => <RandBlock showRandomChar={showRandomChar}/>}/>
							<Route path='/characters' exact component={CharacterPage} />							
							<Route path='/houses' exact component={HousesPage} />
							<Route path='/books' exact component={BookPage} />
							<Route path='/books/:id' exact render={
								({match, location, history}) => { 
									const {id} = match.params
									return <BooksItem bookId={id}/>
								}
							}/>
							<Route path='/404' component={() => <NotFound errStatus='404'></NotFound>} />
							<Redirect from='*' to='/404' />
						</Switch>	
					</Container>
				</div>
			</Router>
		)
	}
};

const NotFound = ({errStatus}) => {
	return (
		<>
			<ErrorMessage errStatus={errStatus}/>
			<Row>
				<Col>
					<Link className="text-white" to='/'>Back home</Link>
				</Col>
			</Row>
		</>	
	)
}