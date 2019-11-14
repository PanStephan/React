import * as React from 'react';
import './header.scss'
import {Button} from 'reactstrap';

export default class Header extends React.Component<any> {
	render() {
		return (
			<div className='header-block '>
				<h3 className='header-title'>
					<a href="#">
					Game of Thrones DB
					</a>
				</h3>
				<ul className='header-links'>
					<li>
						<Button outline onClick={this.props.onClickButton}>Delete Random Char</Button>
					</li>
					<li>
						<a href="#">Characters</a>
					</li>
					<li>
						<a href="#">Houses</a>
					</li>
					<li>
						<a href="#">Books</a>   
					</li>
				</ul>
			</div>
		);
	}
};