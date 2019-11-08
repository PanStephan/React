import React from "react";
import './search-panel.scss';

export default class SearchPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      term: ''
    }
    this.onUpdateSearch = this.onUpdateSearch.bind(this)
  }
  onUpdateSearch(e) {
    const term = e.target.value.toLowerCase();
    this.setState({term})
    this.props.onUpdateSearch(term)
  }
  
  render() {
    return (
      <input 
        className="form-control search-input"  
        type="text"
        placeholder="search" 
        onChange={this.onUpdateSearch}   
      />
    )
  }
}