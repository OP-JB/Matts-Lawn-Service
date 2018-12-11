import React from 'react'
import {Link} from 'react-router-dom'

var NavBar = function() {
  return (
    <div id='navbar' className="top-header">
      <Link id="logo" className="flex" to="/">
        <h2 id="logo-text">Matt's Lawn Service</h2>
      </Link>
      <div id='navbar-content'>
        <div id='navbar-links-container'>
          <Link id="home-link" className="navbar-links" to="/">
            <h3 id="home-text">Home</h3>
          </Link>
          <Link id="services-link" className="navbar-links" to="/services">
            <h3 id="services-text">Services</h3>
          </Link>
          <Link id="contact-link" className="navbar-links" to="/contact">
            <h3 id="contact-text">Contact</h3>
          </Link>
        </div>
        <div id='navbar-contact'>
          <h3 id='navbar-phone' className='navbar-contact-text'>386-290-7950</h3>
          <h4 id='navbar-email'className='navbar-contact-text'>lawnservicebymatt@gmail.com</h4>
        </div>
      </div>
    </div>
  )
}

export default NavBar
