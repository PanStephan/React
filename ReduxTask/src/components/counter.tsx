import * as React from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions'

const Counter = ({counter, inc, dec, clr}) => {
  return (
    <div className="content-container">
      <h1 className='counter'>{counter}</h1>
      <div className="button-container">
        <button onClick={inc} className="s-button btn-plus"></button>
        <button onClick={dec} className="s-button btn-minus"></button>
        <button onClick={clr} className="s-button btn-reload"></button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    counter: state
  }
}

export default connect(mapStateToProps, actions)(Counter)