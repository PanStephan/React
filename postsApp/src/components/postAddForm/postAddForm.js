import React from 'react';
import './post-add-form.scss'
import styled from 'styled-components';
import { Button, Input } from 'reactstrap';

const DivBottomPanel = styled.div`
  margin-top: 20px;
  display: flex;
`

const PostAddForm = ({onAdd}) => {
  return (
    <DivBottomPanel>
      <Input
        type="text"
        placeholder="what you're thinking"
        className="form-control new-post-label"
      />
      <Button outline color="secondary"
        type="submit"
        onClick={() => onAdd('hi')}>
          Add
      </Button>
    </DivBottomPanel>
  )
}

export default PostAddForm