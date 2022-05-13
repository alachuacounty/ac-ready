import { Button, Grid } from '@mui/material';
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from '@react-google-maps/api';
import { memo, useEffect, useState } from 'react';

const containerStyle = { maxWidth: '100%', height: '500px' };

function Map({ center, shelters, selectedMarker }) {
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
          {shelters.map((shelter, index) => (
            <Marker
              key={index}
              position={{
                lat: parseFloat(shelter.latitude),
                lng: parseFloat(shelter.longitude),
              }}
              onClick={() => {
                setMarkerActive(shelter.dataid);
              }}
            >
              {activeMarker === shelter.dataid ? (
                <InfoWindow onCloseClick={setMarkerInactive}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sx={{ fontWeight: 'bold' }}>
                      {shelter.label}
                    </Grid>
                    <Grid item xs={12}>
                      {shelter.address}
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        variant='text'
                        onClick={() =>
                          window.open(
                            `https://maps.google.com/?q=${shelter.latitude},${shelter.longitude}`,
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
