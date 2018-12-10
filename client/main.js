import React from 'react'
import {NavBar, Footer} from './components'
import Routes from './routes'

var Main = function() {
  return (
    <div id='main'>
      <NavBar />
      <Routes />
      <Footer />
    </div>
  )
}

export default Main