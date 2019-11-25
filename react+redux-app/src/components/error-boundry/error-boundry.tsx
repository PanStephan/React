import * as React from 'react';
import Error from '../error'

interface IPropErors {
  error: boolean
}

export default class ErrorBoundry extends React.Component<any, IPropErors> {

  state = {
    error: false  
  }

  componentDidCatch() {
    this.setState({error: true})
  }

  render() {
    const{error} = this.state
    return (
      error ? <Error/> : this.props.children
    )
  }
}