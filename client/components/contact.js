import React from 'react'
var Contact = function() {
  return (
    <div id='contact'>
        <h2 id='contact-header'>
            Contact Matt</h2>
        <div id='contact-content'>
            <form method='post' encType='text/plain' action='mailto:lawnservicebymatt@gmail.com' id='contact-form'>
                <label htmlFor='name' className='contact-label' id='contact-name'>Name:</label>
                <br/>
                <input name='name' className='contact-input' type='text'/>
                <label htmlFor='email' className='contact-label' id='contact-email'>Email:</label>
                <br/>
                <input name='email' className='contact-input' type='text'/>
                <label htmlFor='subject' className='contact-label' id='contact-subject'>Subject:</label>
                <br/>
                <input name='subject' className='contact-input' type='text'/>
                <label htmlFor='message' className='contact-label' id='contact-message'>Message:</label>
                <br/>
                <textarea name='message' className='contact-input' type='text' > </textarea>
                <br/>
                <button type='submit' id='contact-submit'>Submit</button>
            </form>
            <div id='contact-location'>
                <div id='contact-address'>
                </div>
                <div id='contact-phone'>
                </div>
                <div id='contact-map'>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
