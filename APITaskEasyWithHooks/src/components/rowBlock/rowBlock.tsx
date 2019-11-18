import * as React from 'react'
import {Col, Row} from 'reactstrap';

const RowBlock = ({itemList, details}) => {
  return (
    <Row>
      <Col md='6'>
        {itemList}
      </Col>
      <Col md='6'>
        {details}
      </Col>
    </Row>
  )
}

export default RowBlock