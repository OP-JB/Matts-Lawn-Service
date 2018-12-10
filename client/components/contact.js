import React from 'react'

var Contact = function() {
  return (
    <div id='contact'>
        <h2 id='contact-header'>
            Contact Matt</h2>
        <div id='contact-content'>
            <form method='post' encType='text/plain' action='mailto:lawnservicebymatt@gmail.com' id='contact-form'>
                <label htmlFor='name' id='contact-name'></label>
                <input name='name' type='text'/>
                <label htmlFor='email' id='contact-email'> </label>
                <input name='email' type='text'/>
                <label htmlFor='subject' id='contact-subject'></label>
                <input name='subject' type='text'/>
                <label htmlFor='message' id='contact-message'></label>
                <input name='message' type='text'/>
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
