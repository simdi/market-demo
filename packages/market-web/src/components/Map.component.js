import React, { Component, useContext } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { GlobalContext } from '../context';

// const mapStyles = {
//   width: '100%',
//   height: '100%'
// };

export class MapContainer extends Component {
  state = {
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

  render() {
    console.log("super props", this.props);
    const { markets } = this.props;

    return (
      <Map
        google={this.props.google}
        zoom={14}
        // style={mapStyles}
        initialCenter={{
         lat: 6.5244,
         lng: 3.3792
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