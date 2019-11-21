// import * as React from 'react'
// import * as ReactDOM from 'react-dom'
// import App from './components/app/app';
// ReactDOM.render(
// 	<React.Fragment>
// 		<App/>
// 	</React.Fragment>,
// 	document.getElementById('app')
// );


import './styles.scss'
import {createStore} from 'redux'
import axios from 'axios'

const reducer = (state = 0, action) => {
	switch(action.type) {
		case 'INC':
			return state + 1
		case 'DEC':
			return state -1
		case 'CLR':
			return state = 0
		case 'EXP':
			return state = parseInt(action.value.const)
		default:
			return state
	}
}

const inc = () => {
	return {
		type:'INC'
	}
}

const store = createStore(reducer)

document.getElementById('inc').addEventListener('click', () => {
	store.dispatch(inc())
})

document.getElementById('dec').addEventListener('click', () => {
	store.dispatch({type:'DEC'})
})

document.getElementById('clr').addEventListener('click', () => {
	store.dispatch({type:'CLR'})
})

document.getElementById('exp').addEventListener('click', async () => {
	await axios.get('/api/db')
		.then(res => {
			console.log(res)
			const numbers = res.data.numbers
			const rand = Math.floor(Math.random() * numbers.length)
			const value = numbers[rand]
			store.dispatch({type:'EXP', value})
		})
})

document.getElementById('imp').addEventListener('click', async () => {
	const data = document.getElementById('counter').textContent
	
	await axios.post('/api/db', {
		"numbers": [{"const": data, "id":4}]
	}).then(res => console.log(res))
})

const update = () => {
	document.getElementById('counter').textContent = store.getState()
}

store.subscribe(update)
