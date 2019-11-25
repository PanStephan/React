import * as React from 'react'
import {MainPage, CartPage} from '../pages'
import AppHeader from '../app-header'
import WithRestoService from '../hoc'
import * as Background from './food-bg.jpg';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom'

const App = ({RestoService}) => {
	RestoService.getMenuItems().then(res => console.log(res))
	return (
		<Router> 
			<div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
				<AppHeader total={50}/>
				<Switch>
					<Route path='/' exact component={MainPage}/>
					<Route path='cart' exact component={CartPage}/>
					{/* <MainPage/>
					<CartPage /> */}
				</Switch>
			</div>
		</Router>
	)
}

export default WithRestoService()(App);