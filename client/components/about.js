import React from 'react'

var About = function() {
  var text = 'This is some text about my buddy Matt Canales. He is a cool guy and he will do your landscaping better than anyone else you could hire. They would suck real bad compared to Matt I assure you. So hire Matt now to do your landscaping -- offering full-service landscaping and being a cool guy all around all the time including now. This is some text about my buddy Matt Canales. He is a cool guy.'
  return (
    <div id='about'>
      <div id='about-container'>
        <h2 id='about-title'>About Matt</h2>
        <div id='about-content'>
          <img id='about-image' src='./assets/matt-photo.png'></img>
          <p id='about-text'>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default About