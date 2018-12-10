import React from 'react'

var Service = function(props) {
    console.log('PROPS:  ', props)
    return(
        <div className='service'>
          <div className='service-container'>
            <h2 className='service-title'>{props.title}</h2>
            <div className='service-content'>
              <img className='service-image' src={props.photo}></img>
              <p className='service-text'></p>
            </div>
          </div>
        </div>




    )
}

export default Service
