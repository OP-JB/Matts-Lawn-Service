import React from 'react'
import Service from './service'

var services = {
  mowing: {photo: './assets/mowing.jpeg', description: ['Year round availability', 'Bagging option available']},
  edging: {photo: './assets/edging.jpeg', description: ['Walkways, driveways, footpaths, and planting beds', 'Power edging available']},
  cleanup: {photo: './assets/cleanup.jpeg', description: ['Blowing', 'Trash Removal', 'No job too big!']},
  treeTrimming: {photo: './assets/tree-trimming.jpeg', description: ['Specializing in light trimming', 'Removal of debris included']},
  weeding: {photo: './assets/weeding.jpeg', description: ['Flowerbeds, gardens, lawns, shrubbery', 'Environmentally safe approach -- no chemicals']},
  shrubberyTrimming: {photo: './assets/shrubbery-trimming.jpeg', description: ['Shrubs, bushes, and hedges', 'Customizable design']},
  gutterCleaning: {photo: './assets/gutter-cleaning.jpg', description: ['Removal of leaves, dirt, and other debris', 'No spot too high to reach!']},
  pressureWashing: {photo: './assets/pressure-washing.jpeg', description: ['Grease, discoloration, dirt, grime, mildew, pollution, graffiti']}
}

var Services = function() {
  var {mowing, edging, cleanup, treeTrimming, weeding, shrubberyTrimming, gutterCleaning, pressureWashing} = services
  return (
    <div id='services'>
        <h2 id='services-header'>Commercial & Residential Services</h2>
        <div id='service-list'>
            <Service title='Mowing' photo={mowing.photo} description={mowing.description}/>
            <Service title='Edging' photo={edging.photo} description={edging.description}/>
            <Service title='Cleanup' photo={cleanup.photo} description={cleanup.description}/>
            <Service title='Tree Trimming' photo={treeTrimming.photo} description={treeTrimming.description}/>
            <Service title='Weeding' photo={weeding.photo} description={weeding.description}/>
            <Service title='Shrubbery Trimming' photo={shrubberyTrimming.photo} description={shrubberyTrimming.description}/>
            <Service title='Gutter Cleaning' photo={gutterCleaning.photo} description={gutterCleaning.description}/>
            <Service title='Pressure Washing' photo={pressureWashing.photo} description={pressureWashing.description}/>
        </div>
    </div>
  )
}

export default Services
