import React from 'react'

var Service = function(props) {
  var {title, photo, description} = props
  return(
    <div className='service'>
      <div className='service-container'>
        <h2 className='service-title'>{props.title}</h2>
        <div className='service-content'>
          <img className='service-image' src={props.photo}></img>
          <ul className='service-text'>
            {description.map(function(bullet){
              return (<li key={bullet}>{bullet}</li>)
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Service
