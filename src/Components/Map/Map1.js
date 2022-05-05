import React, { useState, useCallback, useMemo } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { render } from "react-dom";

const containerStyle = {
  width: "100%",
  height: "25rem",
};

const center = {
  lat: 29.6513835,
  lng: -82.3257752,
};

const libraries = ["places"];

export default function Map({ mapData }) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBRbdKmyFU_X9r-UVmsapYMcKDJQJmQpAg",
    libraries,
  });

  const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const renderMap = () => {
    // wrapping to a function is useful in case you want to access `window.google`
    // to eg. setup options or create latLng object, it won't be available otherwise
    // feel free to render directly if you don't need that
    //const onLoad = React.useCallback(function onLoad(mapInstance) {
    // do something with map Instance
    //});
    return (
      <GoogleMap
        mapContainerStyle={containerStyle}
        zoom={10}
        center={center}
        onLoad={onMapLoad}

        //onLoad={onLoad}
        /*       onLoad={useCallback((map) => {
        const bounds = new window.google.maps.LatLngBounds();
        mapData.map((place) => {
          bounds.extend(place.pos);
          return place.id;
        });
        map.fitBounds(bounds);
        map.setCenter(center);
        map.setZoom(10);
        setMap(map);
      }, [])}
      onUnmount={useCallback(() => {
        setMap(null);
      }, [])} */
      >
        {/*         {mapData &&
          mapData.map((place) => (
            <Marker
              key={`marker${place.id}`}
              position={place.pos}
              //onLoad={(marker) => markerLoadHandler(marker, place)}
              //onClick={(event) => console.log("Test")}
              // Not required, but if you want a custom icon:
            />
          ))} */}
      </GoogleMap>
    );
  };
  return isLoaded ? renderMap() : loadError;
}
