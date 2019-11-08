import React from "react";
import styled from 'styled-components';

const DivHeader = styled.div`
  align-items: flex-end;
  justify-content: space-between;
  h1 {
    font-size: 26px;
  }
  h2 {
    font-size: 1.2rem;
    color: grey;
  }
`




export default class AppHeader extends React.Component {
  constructor(props) {
    super(props)
    this.declOfNum = this.declOfNum.bind(this)
  }
  declOfNum(number, titles) {  
    const cases = [2, 0, 1, 1, 1, 2];  
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
  }
  render() {
    return (
      <DivHeader className="d-flex">
        <h1>Stepan Startsev</h1>
        <h2>{this.props.allPosts} {this.declOfNum(this.props.allPosts, ['запись', 'записи', 'записей'])}, liked: {this.props.liked}</h2>
      </DivHeader>
    )
  }
}
