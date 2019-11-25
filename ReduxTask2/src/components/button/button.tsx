import * as React from 'react'

export default class Button extends React.Component<any> {
  render() {
    let{name, label, type} = this.props; 
    name = name+' btn'
    return(
      <button type={type} className={name}> {label} </button>
    )
  }
}


