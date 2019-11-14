import * as React from 'react';
import './itemList.scss';
import gotService from './../../services/gotService'
import Spinner from './../spinner/spinner'
import ErrorMessage from './../errorMessage/errorMessage'

interface IPropState {
	charList: null,
	error: boolean
}
export default class ItemList extends React.Component<any, IPropState> {

	gotService = new gotService()

	state = {
		charList: null,
		error: false
	}

	componentDidMount() {
		this.gotService.getAllCharecters()
		.then(charList => {
			this.setState({charList})
		})
	}

	componentDidCatch() {
		this.setState({error: true})
	}		

	generateUUID = () => {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,(c,r)=>('x'==c?(r=Math.random()*16|0):(r&0x3|0x8)).toString(16))
	}

	renderItem = (arr) => {
		return arr.map((item, i) => {
			const UUID = this.generateUUID()
			return (
				<li key={UUID}
					className="list-group-item" 
					onClick={() => {this.props.onCharSelected(i+16)}}
					>
					{item.name}
				</li>
			)
		})
	}

	render() {

	const {charList} = this.state
	if(!charList) return <Spinner/>
	if(this.state.error) return <ErrorMessage errStatus=''/>

	return (
		<ul className="item-list list-group">
			{this.renderItem(charList)}
		</ul>
	);
	}
}