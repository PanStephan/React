import * as React from 'react'
import {Col, Row} from 'reactstrap';

const RowBlock = ({itemList, charDetails}) => {
  return (
    <Row>
      <Col md='6'>
        {itemList}
      </Col>
      <Col md='6'>
        {charDetails}
      </Col>
    </Row>
  )
}

export default RowBlock