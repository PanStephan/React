import * as React from 'react'

export default class Button extends React.Component<any> {
  render() {
    let{name, label} = this.props; 
    name = name+' btn'
    return(
      <button type='submit' className={name}> {label} </button>
    )
  }
}


