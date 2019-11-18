import * as React from 'react';
import './randomChar.scss';
import gotService from './../../services/gotService'
import Spinner from '../spinner/spinner'
import ErrorMessage from '../errorMessage/errorMessage'

function RandomChar() { 

	const newgotService = new gotService(),
				[char, changeChar] = React.useState({}),
				[loading, changeLoading] = React.useState(true),
				[error, changeError] = React.useState(false),
				[errStatus, changeErrStatus] = React.useState(null)

	React.useEffect(() => {
		updateChar()
		let timerId = setInterval(updateChar, 15000)
		return () => {
			clearInterval(timerId)
		}
	}, [])

	const onCharLoaded = char => {
		changeChar(char)
		changeLoading(false)
	}

	const onError = (err) => {
		changeLoading(false)
		changeError(true)
		changeErrStatus(err)
	}

	const updateChar = () => {
		const id : number = Math.floor(Math.random()*140+25)
		newgotService.getCharacter(id)
			.then(onCharLoaded)
			.catch(err => onError(err.message))
	}

		if(error) return <ErrorMessage errStatus={errStatus}/>

		return (
			<div className="random-block rounded">
				{loading ? <Spinner/> : <View char={char}/>}
			</div>
		);

} 

const View = ({char}) => {
	const {name, gender, born, died, culture} = char
	return (
		<>
			<h4>Random Character: {name}</h4>
			<ul className="list-group list-group-flush">
				<li className="list-group-item d-flex justify-content-between">
					<span className="term">Gender </span>
					<span>{gender}</span>
				</li>
				<li className="list-group-item d-flex justify-content-between">
					<span className="term">Born </span>
					<span>{born}</span>
				</li>
				<li className="list-group-item d-flex justify-content-between">
					<span className="term">Died </span>
					<span>{died}</span>
				</li>
				<li className="list-group-item d-flex justify-content-between">
					<span className="term">Culture </span>
					<span>{culture}</span>
				</li>
			</ul>
		</>
	)
}


export default RandomChar 