import React from 'react';
import './post-status-filter.scss'

export default class PostStatusFilter extends React.Component{

  buttons = [
    {name: 'all', label: 'all'},
    {name: 'like', label: 'liked'}
  ]

  render() {
    const buttons = this.buttons.map(({name, label}) => {
      const active = this.props.filter === name
      const classes = active ? 'btn-info' : 'btn-outline-secondary' 
      return (
        <button 
          key={name}
          type="text" 
          className={`btn ${classes}`} 
          onClick={()=> this.props.onFilterSelect(name)}>
        {label}</button>
      )
    })
    return (
      <div className="btn-group">
        {buttons}
      </div>
    )
  }
  
}

