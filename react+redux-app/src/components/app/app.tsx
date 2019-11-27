import * as React from 'react'
import {MainPage, CartPage} from '../pages'
import AppHeader from '../app-header'
import * as Background from './food-bg.jpg';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MenuList from '../menu-list'

const App = () => {
	return (
		<Router> 
			<div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
				<AppHeader total={50}/>
				<Switch>
					<Route path='/' exact component={MainPage}/>
					<Route path='/cart' exact component={CartPage}/>
					<Route paht='/meat' exact render = {
						({match, location, history}) => { 
							return <MenuList category={location.pathname}/>
						}	
					}/>
					<Route paht='/pizza' exact render = {
						({match, location, history}) => { 
							return <MenuList category={location.pathname}/>
						}	
					}/>
					<Route paht='/salads' exact render = {
						({match, location, history}) => { 
							return <MenuList category={location.pathname}/>
						}	
					}/>
				</Switch>
			</div>
		</Router>
	)
}

export default App;