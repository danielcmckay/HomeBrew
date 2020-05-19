import React, { useState, useEffect } from "react";
import "./HomeBrew.css";

import InfoContainer from "../InfoContainer/InfoContainer";
import MapContainer from "../MapContainer/MapContainer";

const HomeBrew = () => {
  const [location, setLocation] = useState({
    lat: 40.854885,
    lng: -88.081807,
  });
  const [breweries, setBreweries] = useState([]);

  const getBrews = async (e) => {
    getMyLoc();

    await fetch(`http://localhost:5000/maps/${location.lat},${location.lng}/`)
      .then((res) => res.json())
      .then((json) => {
        setBreweries(json);

        console.log("in set brews", breweries);
      });
  };

  const searchLoc = async (query) => {
    // let newBrews = []
    // setBreweries(newBrews)

    await fetch(`http://localhost:5000/maps/search/${query}`)
      .then((res) => res.json())
      .then((json) => {
        setBreweries(json);
        setLocation(json[0].coords);
      });
    console.log("Running searchLoc", breweries);
  };

  const getMyLoc = () => {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  };

  useEffect(() => {
    getMyLoc();
    console.log("use effect running", location);
  }, []);

  return (
    <div className="HomeBrew">
      <InfoContainer
        getBrews={getBrews}
        breweries={breweries}
        searchLoc={searchLoc}
      />
      <MapContainer breweries={breweries} location={location} />
    </div>
  );
};

export default HomeBrew;
