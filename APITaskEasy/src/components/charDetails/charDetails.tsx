import * as React from 'react';
import './charDetails.scss';
import gotService from './../../services/gotService'
import ErrorMessage from './../errorMessage/errorMessage'
import Spinner from './../spinner/spinner'

interface IPropState {
	char: null,
	error: boolean,
	loading: boolean
}

export default class CharDetails extends React.Component<any, IPropState> {

	gotService = new gotService();

	state = {
		char: null,
		error: false, 
		loading: true
	}

	componentDidMount() {
		this.updateChar()
	}
	
	componentDidCatch() {
		this.setState({
			error: true,
			loading: false
		})
	}

	componentDidUpdate(prev) {
		if(this.props.charId != prev.charId) {
			this.setState({loading: true})
			this.updateChar()
		}
	}

	onError = () => {
		this.setState({
			error: true,
			loading: false
		})
	}

	onCharLoaded = char => {
		this.setState({
			char,
			loading: false,
		})
}

	updateChar = () => {
		const {charId} = this.props
		if(!charId) return
		this.gotService.getCharacter(charId)
			.then(res => {
				this.setState({
					char: res,
					loading: false,
				})
			})
			.catch(err => this.onError(err.message))

	}

	render() {
		const {loading, char, error} = this.state
		
		if(!char) return <Spinner/>		
		if(error) return <ErrorMessage errStatus=''/> 

		return (
			<div className="char-details rounded">
				{loading ? <Spinner/> : <CharMarkup char={char}/>}
			</div>
		);
	}
}

const CharMarkup = ({char}) => {
	const {name, gender, born, died, culture} = char
	return (
		<>
			<h4>{name}</h4>
			<ul className="list-group list-group-flush">
				<li className="list-group-item d-flex justify-content-between">
					<span className="term">Gender</span>
					<span>{gender}</span>
				</li>
				<li className="list-group-item d-flex justify-content-between">
					<span className="term">Born</span>
					<span>{born}</span>
				</li>
				<li className="list-group-item d-flex justify-content-between">
					<span className="term">Died</span>
					<span>{died}</span>
				</li>
				<li className="list-group-item d-flex justify-content-between">
					<span className="term">Culture</span>
					<span>{culture}</span>
				</li>
			</ul>
		</>
	)
}