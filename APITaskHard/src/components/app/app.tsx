import * as React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const ImgEl = styled.img`
  width: 100px;
  height: 100px;
`

const DivEL = styled.div`
  margin: 50px 0;
`

interface IPropState  {
  data: null,
  loading: boolean
}

export default class App extends React.Component<any, IPropState> {

  state:IPropState = {
    data: null,
    loading: true
  }

  componentDidMount() {
    axios.get('/api/db')
      .then(res => {
        this.setState({data: res.data, loading: false})
      })
  }

  createMarkup = (data) => {
    console.log(data)
    return (
      <div>
        {data.bestsellers.map(el => {
          return (
            <div key={el.price} >
              <span>{el.name}</span>
              <ImgEl src={el.url} alt=""/>
              <span>{el.price}</span>
            </div>
          )
        })}
        {data.coffee.map(el => {
          return (
            <DivEL key={el.price} >
              <span>{el.name}</span>
              <span>{el.description}</span>
              <ImgEl src={el.url} alt=""/>
              <span>{el.price}</span>
              <span>{el.country}</span>
            </DivEL>
          )
        })}
        {data.goods.map(el => {
          return (
            <div key={el.price} >
              <span>{el.name}</span>
              <ImgEl src={el.url} alt=""/>
              <span>{el.country}</span>
            </div>
          )
        })}
      </div>
    )
  }
  
  render() {
    const { data, loading } = this.state
    return (
      <React.Fragment>
        {loading ? '' : this.createMarkup(data)}
      </React.Fragment>
    )
  }
}
