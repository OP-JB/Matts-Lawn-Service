import React from 'react'
import ReactDOM from 'react-dom'
import Main from './main'
import history from './history'
import {Router} from 'react-router-dom'

ReactDOM.render(
  <Router history={history}>
    <Main />
  </Router>,
  document.getElementById('app')
)