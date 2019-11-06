import React from "react";
import AppHeader from '../appHeader/appHeader';
import SearchPanel from '../searchPanel/searchPanel';
import PostStatusFilter from '../postStatusFilter/postStatusFilter'
import PostList from '../postList/postList';
import PostAddForm from '../postAddForm/postAddForm'

import './app.scss'

const App = () => {

  const data = [
    0,
    null, 
    [],
    undefined, 
    false,
    {label: 'Going to learn react', id: 'cfvfv'},
    {label: 'Going to learn react', id: 'csscv'},
    {label: 'Going to learn react', id: 'cevw'}
  ];

  return (
    <div className="app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList posts={data} />
      <PostAddForm/>
    </div>
  )
}

export default App;
