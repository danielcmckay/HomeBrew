import React, {useState} from 'react';
import './HomeBrew.css';

import InfoContainer from '../InfoContainer/InfoContainer';
import MapContainer from '../MapContainer/MapContainer';


const HomeBrew = () => {
  const [location, setLocation] = useState({
    lat: '',
    lng: ''
  });
  const [breweries, setBreweries] = useState([])

  const getBrews = (e) => {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
        console.log(location)
      });
      fetch(`http://localhost:5000/maps/${location.lat},${location.lng}/`)
        .then(res => res.json())
        .then(json => setBreweries(json))

    } else {
      console.log("Could not get location")
    }
  }
  
  const getMap = () => {

  }

  return (
    <div className='HomeBrew'>
      <InfoContainer getBrews={getBrews} breweries={breweries}/>
      <MapContainer getMap={getMap} breweries={breweries} location={location}/>
    </div>
  )
}

export default HomeBrew
