import React from 'react'
import {NavBar} from './components'
import Routes from './routes'

var Main = function() {
  return (
    <div id='main'>
      <NavBar />
      <Routes />
    </div>
  )
}

export default Main