import React, {useState} from 'react';
import uuid from 'uuid/dist/v4'
import './InfoContainer.css';

import SearchForm from '../SearchForm/SearchForm';
import BreweryItem from '../BreweryItem/BreweryItem'

const InfoContainer = (props) => {
  

  const getLocHandler = (e) => {
    props.getBrews()
  }

  return (
    <div className='InfoContainer'>
      <button className="LocButton" onClick={getLocHandler}>Find Me!</button>
      <SearchForm />
      {props.breweries.map(brew => <BreweryItem name={brew.name} rating={brew.rating} address={brew.address} key={uuid()}/>)}
    </div>
  )
}

export default InfoContainer
