import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

export class MapContainer extends Component {
  // state = {
  //   location: {
  //     lng: 3.3792,
  //     lat: 6.5244,
  //   },
  //   showingInfoWindow: false,  //Hides or the shows the infoWindow
  //   activeMarker: {},          //Shows the active marker upon click
  //   //Shows the infoWindow to the selected place upon a marker
  //   selectedPlace: {},
  //   isMarkerShown: false
  // };

  // onMarkerClick = (props, marker, e) => {
  //   console.log('marker', props, marker);
  //   this.setState({
  //     ...this.state,
  //     selectedPlace: props,
  //     activeMarker: marker,
  //     showingInfoWindow: true,
  //   });
  // }

  // onClose = props => {
  //   if (this.state.showingInfoWindow) {
  //     this.setState({
  //       ...this.state,
  //       showingInfoWindow: false,
  //       activeMarker: null
  //     });
  //   }
  // };

  // onMapClicked = () => {
  //   if (this.state.showingInfoWindow)
  //     this.setState({
  //       activeMarker: null,
  //       showingInfoWindow: false
  //     });
  // };

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
    console.log('REs', marker);
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
        className="map"
        google={this.props.google}
        // zoom={14}
        // onClick={this.onMapClicked}
        // style={{ height: "100%", position: "relative", width: "95%" }}
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
              // onClose={this.onClose}
              onOpen={e => {
                this.onInfoWindowOpen(this.props, e);
              }}
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