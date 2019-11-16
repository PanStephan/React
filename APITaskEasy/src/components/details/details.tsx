import * as React from 'react';
import './details.scss';
import gotService from '../../services/gotService'
import ErrorMessage from '../errorMessage/errorMessage'
import Spinner from '../spinner/spinner'

interface IPropState {
	item: null,
	error: boolean,
	loading: boolean
}

interface IPropField {
	item?: object,
	field: string,
	label: string
}

const Field  = ({item, field, label} : IPropField) => {
	return (
		<li className="list-group-item d-flex justify-content-between">
			<span className="term">{label}</span>
			<span>{item[field]}</span>
		</li>
	)
}

export {Field}

export default class Details extends React.Component<any, IPropState> {

	gotService = new gotService();

	state = {
		item: null,
		error: false, 
		loading: true
	}

	componentDidMount() {
		this.update()
	}
	
	componentDidCatch() {
		this.setState({
			error: true,
			loading: false
		})
	}

	componentDidUpdate(prev) {
		if(this.props.id != prev.id) {
			this.setState({loading: true})
			this.update()
		}
	}

	onError = () => {
		this.setState({
			error: true,
			loading: false
		})
	}


	update = () => {
		const {id, data} = this.props
		if(!id) return
		data(id)
			.then(res => {
				this.setState({
					item: res,
					loading: false,
				})
			})
			.catch(() => this.onError())

	}

	render() {
		const {loading, item, error} = this.state
		const {children, text} = this.props 
		
		if(!item) return <Spinner/>		
		if(error) return <ErrorMessage/> 

		return (
			<div className="item-details rounded">
				{loading ? <Spinner/> : <Markup item={item} childrens={children} text={text} />}
			</div>
		);
	}
}

const Markup = ({item, childrens, text}) => {
	const {name} = item
	return (
		<>
			<div>{text}</div>
			<h4>{name}</h4>
			<ul className="list-group list-group-flush">
				{
					React.Children.map(childrens, (el) => {
						return React.cloneElement(el, {item})
					})
				}
			</ul>
		</>
	)
}


