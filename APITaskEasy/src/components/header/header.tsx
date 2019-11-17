import * as React from 'react';
import './header.scss'
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom'

export default class Header extends React.Component<any> {
	render() {
		return (
			<div className='header-block '>
				<h3 className='header-title'>
					<Link to='/'>
					Game of Thrones DB
					</Link>
				</h3>
				<ul className='header-links'>
					<li>
						<Button outline onClick={this.props.onClickButton}>Delete Random Char</Button>
					</li>
					<li>
						<Link to='/characters/'>Characters</Link>
					</li>
					<li>
						<Link to='/houses/'>Houses</Link>
					</li>
					<li>
						<Link to='/books/'>Books</Link>   
					</li>
				</ul>
			</div>
		);
	}
};