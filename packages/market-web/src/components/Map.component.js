import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

export class MapContainer extends Component {
  state = {
    location: {
      lng: 3.3792,
      lat: 6.5244,
    },
    activeMarker: {},
    selectedPlace: {},
    showingInfoWindow: false
  };

  onMarkerClick = (props, marker) => {
    this.setState({
      activeMarker: marker,
      selectedPlace: props,
      showingInfoWindow: true
    });
  }

  onInfoWindowClose = () =>
    this.setState({
      activeMarker: null,
      showingInfoWindow: false
    });

  onMapClicked = () => {
    if (this.state.showingInfoWindow)
      this.setState({
        activeMarker: null,
        showingInfoWindow: false
      });
  };

  getUserLocation = props => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState(prevState => ({
          location: {
            ...prevState.currentLatLng,
            lat: position.coords.latitude,
            lng: position.coords.longitude
          },
          isMarkerShown: true
        }));
      });
    } else {
      alert("You need to accept google maps location");
    }
  }

  render() {
    const { markets, google } = this.props;
    const { location, activeMarker, showingInfoWindow, selectedPlace } = this.state;

    this.getUserLocation();

    return (
      <Map
        className="map"
        google={google}
        zoom={14}
        onClick={this.onMapClicked}
        style={{ height: "100%", position: "relative", width: "95%" }}
        initialCenter={{
         lat: location.lat,
         lng: location.lng
        }}
      >
      {
        markets.map(market => (
          <Marker
            key={market.id}
            title={market.description}
            name={market.name}
            category={market.category}
            onClick={this.onMarkerClick}
            position={{lat: market.address.location.lat, lng: market.address.location.lng}}>
          </Marker>
          ))
        }
        <InfoWindow
          marker={activeMarker}
          visible={showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{activeMarker.name}</h4>
            <div>
              <b>Category: <i>{activeMarker.category}</i></b>
              <p>Description: {activeMarker.title}</p>
            </div>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(MapContainer);