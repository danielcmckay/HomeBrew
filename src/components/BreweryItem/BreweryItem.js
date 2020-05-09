import React from 'react'

const BreweryItem = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.address}</p>
      {/* <span>{props.rating.map(s => <i className="fas fa-star"></i>)}</span> */}
    </div>
  )
}

export default BreweryItem
