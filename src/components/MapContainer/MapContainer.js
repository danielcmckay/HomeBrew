import React, { useState } from "react";
import uuid from "uuid/dist/v4";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import "./MapContainer.css";

export const MapContainer = (props) => {
  const [selectedPlace, toggleSelectedPlace] = useState({});
  const [isMarkerVisible, toggleIsMarkerVisible] = useState(true)

  const onMarkerClick = (e) => {
    toggleSelectedPlace(e);
    toggleIsMarkerVisible(true)
  };


  const onInfoWindowClose = () => {
  };

  const style = {
    position: "relative",
    width: "100%",
    height: "100%",
  };

  const containerStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
  };

  return (
    <div className="MapContainer">
      <Map
        containerStyle={containerStyle}
        google={props.google}
        center={props.location}
        style={style}
        zoom={14}
      >
        {props.breweries.map((brew) => {
          return (
            <Marker
              name={brew.name}
              position={brew.coords}
              onClick={onMarkerClick}
            />
          );
        })}

        {isMarkerVisible && <InfoWindow position={selectedPlace.position} marker={selectedPlace}>
                  <div>
                    <h1>{selectedPlace.name}</h1>
                  </div>
                </InfoWindow>}
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAPS_API_KEY,
})(MapContainer);
