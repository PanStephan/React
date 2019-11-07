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

const AppHeader = () => {
  return (
    <DivHeader className="d-flex">
      <h1>Stepan Startsev</h1>
      <h2>tasks</h2>
    </DivHeader>
  )
}

export default AppHeader