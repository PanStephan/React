import * as React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import './styles.scss';
import GotService from './services/gotService'

const FirstGotService = new GotService()
// я пытался что-то такое сделать
// FirstGotService.getInfo(['books','characters', 'houses'], '1')
FirstGotService.getAllCharecters()
  .then(res => {
    res.forEach(el => {
      console.log(el.name)
    })
  })

FirstGotService.getAllBooks()
.then(res => {
  res.forEach(el => {
    console.log(el.name)
  })
})

FirstGotService.getAllHouses()
.then(res => {
  res.forEach(el => {
    console.log(el.name)
  })
})

ReactDOM.render(<App />, document.getElementById('app'));