import React from "react";
import uuid from 'uuid/dist/v4'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import "./MapContainer.css";

export class MapContainer extends React.Component {
  onMapClicked = (e) => {};

  render(props) {
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
    const defaultCenter = {
      lat: 40.854885,
      lng: -88.081807,
    };
    return (
      <div className="MapContainer">
        <Map
          containerStyle={containerStyle}
          google={this.props.google}
          initialCenter={{
            lat: 40.854885,
            lng: -88.081807,
          }}
          center={this.props.location !== undefined ? this.props.location : defaultCenter}
          style={style}
          zoom={10}
          onClick={this.onMapClicked}
        >
          {this.props.breweries.map(brew => {
            return <Marker name={brew.name} position={brew.coords}/>
          })}
          <Marker onClick={this.onMarkerClick} name={"Current location"} key={uuid()}/>

          {/* <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow> */}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAPS_API_KEY,
})(MapContainer);
