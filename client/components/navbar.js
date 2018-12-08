import React from 'react'
import {Link} from 'react-router-dom'

var NavBar = function() {
  return (
    <div id='navbar' className="top-header">
      <div>
        <Link id="logo" className="flex" to="/">
          <h2 id="logo-text">Matt's Lawn Service</h2>
        </Link>
      </div>
    </div>
  )
}

export default NavBar