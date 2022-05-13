import { Button, Grid } from '@mui/material';
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from '@react-google-maps/api';
import { memo, useEffect, useState } from 'react';

const containerStyle = { maxWidth: '100%', height: '500px' };

function Map({ center, data, selectedMarker }) {
  const [activeMarker, setActiveMarker] = useState(null);

  const setMarkerActive = (id) => {
    if (activeMarker === id) return;
    setActiveMarker(id);
  };

  const setMarkerInactive = () => {
    setActiveMarker(null);
  };

  useEffect(() => {
    if (selectedMarker) setMarkerActive(selectedMarker);
  }, [selectedMarker]);

  return (
    <LoadScript googleMapsApiKey='AIzaSyBRbdKmyFU_X9r-UVmsapYMcKDJQJmQpAg'>
      <GoogleMap mapContainerStyle={containerStyle} zoom={10} center={center}>
        <>
          {data &&
            data.map((location, index) => (
              <Marker
                key={index}
                position={{
                  lat: parseFloat(location.latitude),
                  lng: parseFloat(location.longitude),
                }}
                onClick={() => {
                  setMarkerActive(location.dataid);
                }}
              >
                {activeMarker === location.dataid ? (
                  <InfoWindow onCloseClick={setMarkerInactive}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sx={{ fontWeight: 'bold' }}>
                        {location.label}
                      </Grid>
                      <Grid item xs={12}>
                        {location.address}
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          variant='text'
                          onClick={() =>
                            window.open(
                              `https://maps.google.com/?q=${location.latitude},${location.longitude}`,
                              '_blank'
                            )
                          }
                        >
                          navigate
                        </Button>
                      </Grid>
                    </Grid>
                  </InfoWindow>
                ) : null}
              </Marker>
            ))}
        </>
      </GoogleMap>
    </LoadScript>
  );
}

export default memo(Map);
