import React, { Component, Fragment } from "react";
import { compose } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

const MapWithAMarker = compose(
  withScriptjs,
  withGoogleMap
)((props) => {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 29.6513835, lng: -82.3257752 }}
    >
      {props.markers.length > 0 &&
        props.markers.map((marker) => {
          const onClick = props.onClick.bind(this, marker);
          return (
            <Marker key={marker.id} onClick={onClick} position={marker.pos}>
              {props.selectedMarker === marker && (
                <InfoWindow>
                  <div>
                    <h3>{marker.label}</h3>
                    <a
                      href={
                        "https://www.google.com/maps/search/?api=1&query=" +
                        marker.pos.lat +
                        "," +
                        marker.pos.lng
                      }
                      target="_blank"
                    >
                      {marker.address}
                    </a>
                  </div>
                </InfoWindow>
              )}
            </Marker>
          );
        })}
    </GoogleMap>
  );
});

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markerObjects: [],
      selectedMarker: false,
    };
  }
  componentDidMount() {}

  componentDidUpdate(prevProps) {
    if (prevProps.defaultSelectedMarker !== this.props.defaultSelectedMarker) {
      //myArray.find(x => x.id === '45').foo;
      if (this.props.defaultSelectedMarker != null) {
        let updateMarker = prevProps.mapData.find(
          (x) => x.id === this.props.defaultSelectedMarker
        );
        this.setState({ selectedMarker: updateMarker });
        window.scrollTo(0, 0);
      }
    }
  }

  handleClick = (marker, event) => {
    // console.log({ marker })
    this.setState({ selectedMarker: marker });
  };

  render() {
    return (
      <MapWithAMarker
        selectedMarker={this.state.selectedMarker}
        markers={this.props.mapData}
        onClick={this.handleClick}
        onLoad={this.handleMarkerLoad}
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBRbdKmyFU_X9r-UVmsapYMcKDJQJmQpAg&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `25rem`, width: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}
