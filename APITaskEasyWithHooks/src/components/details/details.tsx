import * as React from 'react'
import './details.scss'
import ErrorMessage from '../errorMessage/errorMessage'
import Spinner from '../spinner/spinner'
import 'reactstrap';

interface IPropField {
	item?: object,
	field: string,
	label: string
}

const Field  = ({items, field, label} : IPropField) => {

	return (
		<li className="list-group-item d-flex justify-content-between">
			<span className="term">{label}</span>
			<span>{items[field]}</span>
		</li>
	)
}
export {Field}

function Details({id, data, text, children}) {

	const [item, changeItem] = React.useState(null),
				[loading, changeLoading] = React.useState(true)

	React.useEffect(() => {
		update()
		changeLoading(true)
	}, [id])

	const update = () => {
		if(!id) return
		data(id)
			.then(res => {
				changeItem(res)
				changeLoading(false)
			})
	}

	if(id === null) return <h2 className='text-danger'>Choose Smth</h2>

	return (
		<div className="item-details rounded">
			{loading ? <Spinner/> : <Markup items={item} childrens={children} text={text} />}
		</div>
	);
}

const Markup = ({items, childrens, text}) => {
	return (
		<>
			<div>{text}</div>
			<h4>{items.name}</h4>
			<ul className="list-group list-group-flush">
				{
					React.Children.map(childrens, (el) => {
						return React.cloneElement(el, {items})
					})
				}
			</ul>
		</>
	)
}

export default Details