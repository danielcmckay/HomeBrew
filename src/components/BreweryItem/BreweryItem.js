import React from 'react';
import './BreweryItem.css';

const BreweryItem = (props) => {
  const showMapBrew = e => {
    console.log(e.target)
  }

  return (
    <div className="BreweryItem" onClick={showMapBrew}>
      <h2 className="BreweryName">{props.name}</h2>
      <p className="BreweryRating">Rating: {props.rating} <i className="fas fa-star"></i></p>
      <span><span className="BreweryWebsite">WEBSITE</span><span className="BreweryDirections">DIRECTIONS</span></span>
      <p className="BreweryAddress">{props.address}</p>
    </div>
  )
}

export default BreweryItem
