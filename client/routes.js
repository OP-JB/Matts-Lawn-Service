import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {Services, Contact, Home} from './components'

var Routes = function() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/services' component={Services} />
      <Route exact path='/contact' component={Contact} />
    </Switch>
  )
}

export default Routes