import React from "react";
import AppHeader from '../appHeader/appHeader';
import SearchPanel from '../searchPanel/searchPanel';
import PostStatusFilter from '../postStatusFilter/postStatusFilter'
import PostList from '../postList/postList';
import PostAddForm from '../postAddForm/postAddForm'

import styled from 'styled-components';

const DivApp = styled.div`
  margin: 0 auto;
  max-width: 800px;
`

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
      data : [
        0,
        null, 
        [],
        undefined, 
        false,
        {label: 'Going to learn react', id: 'cfvfv'},
        {label: 'Going to leadcsdcrn react', id: 'csscv'},
        {label: 'Going to learn react', id: 'cevw'}
      ],
    }
    this.deleteItem = this.deleteItem.bind(this)
    this.isObject = this.isObject.bind(this)
    this.filterData = this.filterData.bind(this)
    this.addItem = this.addItem.bind(this)
    this.generateUUID = this.generateUUID.bind(this)
  }

  isObject(obj) {
    return obj != null && obj.constructor.name === 'Object'
  }

  filterData(data) {
    return data.filter(el =>{return this.isObject(el)})
  }

  generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,(c,r)=>('x'==c?(r=Math.random()*16|0):(r&0x3|0x8)).toString(16))
  }

  deleteItem(id) {
    this.setState(({data}) => {
      const clearData = this.filterData(data)
      const index = clearData.findIndex((el)=> el.id === id)
      const newArr = [...clearData.slice(0, index), ...clearData.slice(index + 1)];

      return {
        data: newArr,
      }
    })
  }

  addItem(text) {
    console.log(this.generateUUID())
  }

  render() {
    return (
      <DivApp>
        <AppHeader />
        <div className="search-panel d-flex">
          <SearchPanel />
          <PostStatusFilter />
        </div>
        <PostList posts={this.filterData(this.state.data)}
        onDelete={this.deleteItem}/>
        <PostAddForm
        onAdd={this.addItem}/>
      </DivApp>
    ) 
  }
}


