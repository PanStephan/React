import React from 'react';
import styled from 'styled-components';
import './modal-delete.scss';
import { Button } from 'reactstrap';

const DivModalDelete = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25vw;
  height: 15vh;
  background-color: #eee;
  opacity: 0.85;
  z-index: 2;
`

export default class ModalDelete extends React.Component {

  render() {
    const {onDelete, modalDelete, onOpenModalDelete} = this.props
    return (
      <div className={modalDelete}>
        <DivModalDelete className='modal-delete'>
          <Button color="primary" onClick={onOpenModalDelete}>Close</Button>
          <p>Are you shure ?</p>
          <Button color="primary" block onClick={onDelete}>OK</Button>
        </DivModalDelete>
      </div>
    )
  }
 

}