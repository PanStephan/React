import React from 'react';
import './post-add-form.scss'
import styled from 'styled-components';
import { Button, Input } from 'reactstrap';

const FormBottomPanel = styled.form`
  margin-top: 20px;
  display: flex;
`

export default class PostAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
    this.onValueChange = this.onValueChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onValueChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault()
    if(this.state.text === '') return 0
    this.props.onAdd(this.state.text)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <FormBottomPanel 
      onSubmit={this.onSubmit}>
        <Input
          type="text"
          placeholder="what you're thinking"
          className="form-control new-post-label"
          onChange={this.onValueChange}
          value={this.state.text}
        />
        <Button outline color="secondary"
          type="submit"
          >
            Add
        </Button>
      </FormBottomPanel>
    )
  }
  
}
