import React from 'react'

var About = function() {
  var text = `With over fifteen years of experience, we provide commercial and residential landscaping services throughout Volusia and Flagler County. Matt’s Lawn Service is fully licensed and insured --
we strive to treat your property and it’s maintenance with the utmost care, and pride ourselves in our work and professionalism.`
  return (
    <div id='about'>
      <div id='about-container'>
        <h2 id='about-title'>About Matt's Lawn Service</h2>
        <div id='about-content'>
          <img id='about-image' src='./assets/matthat600.png'></img>
          <div id='about-text'>{text}
            <h4 id='about-signature'>-Matt Canales, Owner</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
