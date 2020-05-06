import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

export class MapContainer extends Component {
  state = {
    location: {
      lng: 3.3792,
      lat: 6.5244,
    },
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
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
        }
      )
    } else {
      alert("You need to accept google maps location");
    }
  }

  render() {
    const { markets } = this.props;
    const { location } = this.state;

    this.getUserLocation();

    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={{ width: '95%'}}
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
            position={{lat: market.address.location.lat, lng: market.address.location.lng}}>
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
              <div>
                <h4>{market.description}</h4>
              </div>
            </InfoWindow>
          </Marker>
        ))
      }
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(MapContainer);