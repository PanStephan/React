import * as React from 'react';
import './itemList.scss';
import Spinner from './../spinner/spinner'

interface IPropState {
	itemList?: Array<any>,
}
function ItemList({getData, onItemSelected, renderData}) {

	const [itemList, updateList] = React.useState<IPropState>([]);

	React.useEffect(() => {
		getData()
			.then(itemList => {
				updateList(itemList)
			})
	}, [])
	
	const renderItem = (arr) => {
		return arr.map((item) => {
			const label = renderData(item)
			return (
				<li key={item.id}
					className="list-group-item" 
					onClick={() => {onItemSelected(item.id)}}
					>
					{label}
				</li>
			)
		})
	}

	if(!itemList) return <Spinner/>

	return (
		<ul className="item-list list-group">
			{renderItem(itemList)}
		</ul>
	)

}
export default ItemList