import React from 'react'

var ContactForm = function() {
  return (
    <div id='contact-container'>
      <div id='contact-content'>
      
        <form method='post' encType='text/plain' action='mailto:lawnservicebymatt@gmail.com' id='contact-form'>

          <label htmlFor='name' className='contact-label'>Name:</label><br/>
          <input name='name' id='contact-name' className='contact-input' type='text'/>

          <label htmlFor='email' className='contact-label' id='contact-email'>Email:</label><br/>
          <input name='email' className='contact-input' type='text'/>

          <label htmlFor='subject' className='contact-label'>Subject:</label><br/>
          <input name='subject' id='contact-subject' className='contact-input' type='text'/>

          <label htmlFor='message' className='contact-label'>Message:</label><br/>
          <textarea name='message' id='contact-message' className='contact-input' type='text' ></textarea><br/>

          <button type='submit' id='contact-submit'>Send Email</button>

        </form>

        <div id='contact-location'>
          <div id='contact-address'>
            <h5 className='contact-address-text'> Lumber Liquidators Plaza</h5>
            <h5 className='contact-address-text'> 1757 Nova Rd. Suite 101-B</h5>
            <h5 className='contact-address-text'>Holly Hill, FL 32117</h5>
          </div>
          <div id='contact-phone' className='contact-address-text'>386-290-7950</div>
          <div id='contact-map'>
            <img id='service-map-image' src='./assets/servicemap.png'></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
