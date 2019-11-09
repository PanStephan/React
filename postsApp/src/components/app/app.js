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

  state = {
    openModal: false,
    data : [
      0,
      null, 
      [],
      undefined, 
      false,
      {label: 'Going to learn react',important: false, like: false, id: 'cfvfv', time:'1.1.1'},
      {label: 'Going to leadcsdcrn react',important: false, like: false, id: 'csscv', time:'1.1.1'},
      {label: 'Going to learn react',important: false, like: false, id: 'cevw', time:'1.1.1'}
    ],
    term: '',
    filter: 'all',
    text: '',
  }

  searchPost = (items, term) => {
    if (term.length === 0) {
      return items
    }
    return items.filter( item => {
      return item.label.toLowerCase().indexOf(term) > -1
    }) 
  }

  filterPost = (items, filter) => {
    if (filter === 'like') {
      return items.filter(el => el.like)
    } else {
      return items
    }
  }

  isObject = (obj) => {
    return obj != null && obj.constructor.name === 'Object'
  }

  filterData = (data) => {
    return data.filter(el =>{return this.isObject(el)})
  }

  generateUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,(c,r)=>('x'==c?(r=Math.random()*16|0):(r&0x3|0x8)).toString(16))
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      const clearData = this.filterData(data)
      const index = clearData.findIndex((el)=> el.id === id)
      const newArr = [...clearData.slice(0, index), ...clearData.slice(index + 1)];

      return {
        data: newArr,
      }
    })
  }

  addItem = (text) => {
    const newItem = {
      label: text,
      import: false,
      id: this.generateUUID(),
      time: new Date().toLocaleTimeString()
    }

    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    })
  }

  createNewData = (id, important = false) => {
    this.setState(({data}) => {
      const clearData = this.filterData(data)
      const index = clearData.findIndex((el)=> el.id === id)
      const old = clearData[index]
      let newItem;
      console.log(important)
      important ? newItem = {...old, important: !old.important} : newItem = {...old, like: !old.like}
      const newArr = [...clearData.slice(0, index), newItem,...clearData.slice(index + 1)];

      return {
        data: newArr
      }
    })
  }
 
  onUpdateSearch = (term) => {
    this.setState({term})
  }

  onUpdateLabel = (id, label, onOpenModalEdit) => {
    if(this.filterData(this.state.data).filter(el => el.label === label).length > 0) return 0
    else {
      this.setState(({data}) => {
        const clearData = this.filterData(data)
        const index = clearData.findIndex((el) => el.id === id)
        const old = clearData[index]
        const newItem = {...old, label: label}
        const newArr = [...clearData.slice(0, index), newItem,...clearData.slice(index + 1)];
        return {
          data: newArr
        }
      })
      onOpenModalEdit()
    }
  }

  onFilterSelect = (filter) => { 
    this.setState({filter})
  }

  onLabelChachge = (text) => {
    this.setState({text})
  }

  render() {
    const clearData = this.filterData(this.state.data)
    const onOpenEdit = this.state.onOpenEdit
    const term = this.state.term;
    const filter = this.state.filter
    const liked = clearData.filter(el => {
      return el.like
    }).length

    const allPosts = clearData.length
    const visiblePosts = this.filterPost(this.searchPost(clearData, term), filter);
    
    return (
      <DivApp>
        <AppHeader 
        liked={liked}
        allPosts={allPosts}/>
        <div className="search-panel d-flex">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <PostStatusFilter 
          filter={filter}
          onFilterSelect={this.onFilterSelect}/>
        </div>
        <PostList posts={visiblePosts}
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          createNewData={this.createNewData}
          onUpdateLabel={this.onUpdateLabel}/>
        <PostAddForm
        onAdd={this.addItem}/>
      </DivApp>
    ) 
  }
}


