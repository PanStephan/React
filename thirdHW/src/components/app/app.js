import React from "react";
import AppHeader from '../appHeader/appHeader';
import SearchPanel from '../searchPanel/searchPanel';
import PostStatusFilter from '../postStatusFilter/postStatusFilter'
import PostList from '../postList/postList';
import PostAddForm from '../postAddForm/postAddForm'

import './app.scss'

const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList/>
      <PostAddForm/>
    </div>
  )
}

export default App
