import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './styles.scss'
// import {createStore} from 'redux'

import App from './components/app/app';

ReactDOM.render(
    <React.Fragment>
        <App/>
    </React.Fragment>,
    document.getElementById('app')
);