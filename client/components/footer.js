import React from 'react'
import {Link} from 'react-router-dom'

var Footer = function() {
  return (
    <div id='footer'>
      <div id='footer-content'>
        <div id='footer-contact'>
          <h3 id='footer-phone' className='footer-contact-text'>386-290-7950</h3>
          <h4 id='footer-email'className='footer-contact-text'>lawnservicebymatt@gmail.com</h4>  
        </div>
        <div id='copyright'>
          <h5 id='copyright-text'>© MATTSLAWNSERVICE</h5>
        </div>
        <div id='social-media'>
          <a target="_blank" rel="noopener noreferrer" href='https://www.facebook.com' className='social-media-icons'  >
            <img id='facebook-icon' src='./assets/facebook-icon.png'></img>
          </a>
          <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com' className='social-media-icons'  >
            <img id='instagram-icon' src='./assets/instagram-icon.png'></img>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
