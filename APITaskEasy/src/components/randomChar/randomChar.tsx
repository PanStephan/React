import * as React from 'react';
import './randomChar.scss';
import gotService from './../../services/gotService'
import Spinner from '../spinner/spinner'
import ErrorMessage from '../errorMessage/errorMessage'

interface IPropState {
	char: object,
	loading: boolean,
	error: boolean,
	errStatus: number
}

export default class RandomChar extends React.Component<any, IPropState> {

	gotService = new gotService();

	state = {
		char: {},
		loading: true,
		error: false,
		errStatus: null
	}

	componentDidMount() {
		this.updateChar()
		this.timerId = setInterval(this.updateChar, 1500)
	}

	componentWillUnmount() {
		clearInterval(this.timerId)
	}

	onCharLoaded = char => {
		this.setState({
			char,
			loading: false,
		})
	}

	onError = (err) => {
		this.setState({
			error: true,
			loading: false,
			errStatus: err
		})
	}

	updateChar = () => {
		const id : number = Math.floor(Math.random()*140+25)
		this.gotService.getCharacter(id)
			.then(this.onCharLoaded)
			.catch(err => this.onError(err.message))
	}

	render() {
		const {char, loading, error, errStatus} = this.state

		if(error) <ErrorMessage errStatus={errStatus}/>

		return (
			<div className="random-block rounded">
				{loading ? <Spinner/> : <View char={char}/>}
			</div>
		);
	}
} 

const View = ({char}) => {
	const {name, gender, born, died, culture} = char
	return (
		<>
			<h4>Random Character: {name || 'not info'}</h4>
			<ul className="list-group list-group-flush">
				<li className="list-group-item d-flex justify-content-between">
					<span className="term">Gender </span>
					<span>{gender || 'not info'}</span>
				</li>
				<li className="list-group-item d-flex justify-content-between">
					<span className="term">Born </span>
					<span>{born || 'not info'}</span>
				</li>
				<li className="list-group-item d-flex justify-content-between">
					<span className="term">Died </span>
					<span>{died || 'not info'}</span>
				</li>
				<li className="list-group-item d-flex justify-content-between">
					<span className="term">Culture </span>
					<span>{culture || 'not info'}</span>
				</li>
			</ul>
		</>
	)
}