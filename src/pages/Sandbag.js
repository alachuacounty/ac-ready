import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Geocode from 'react-geocode';

import IncidentLayout from '../components/Branding/IncidentLayout';
import { titleContext } from '../contexts/TitleContext';
import { Grid, Typography } from '@mui/material';
import Map from '../components/Map';
import SandbagsTable from '../components/Tables/Sandbags';

Geocode.setApiKey(`AIzaSyBRbdKmyFU_X9r-UVmsapYMcKDJQJmQpAg`);
Geocode.setLocationType('ROOFTOP');

const headCells = [
  {
    id: 'dataid',
    label: '',
  },
  {
    id: 'SandbagStatus',
    label: 'Status',
  },
  {
    id: 'label',
    label: 'Location Name',
  },

  {
    id: 'address',
    label: 'Address',
  },
  {
    id: 'SandbagLimitations',
    label: 'Limitations',
  },
  {
    id: 'SandbagDetails',
    label: 'Details',
  },
];

export default function Shelter() {
  const { updatePageTitle, updatePageHeading } = useContext(titleContext);
  const [center, setCenter] = useState({ lat: 29.651634, lng: -82.324829 });
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [sandbagsLocations, setSandbagsLocations] = useState([]);

  const getSandbagsLocations = async () => {
    try {
      const result = await axios.get(
        `https://api.alachuacounty.us/hurricaneportal/api/getSandBagsData`
      );

      for (let index in result.data[0]) {
        const response = await Geocode.fromAddress(
          result.data[0][index].SandbagLocation
        );
        if (response.results[0]) {
          const { lat, lng } = response.results[0].geometry.location;
          result.data[0][index].latitude = lat;
          result.data[0][index].longitude = lng;
          result.data[0][index].dataid = index;
          result.data[0][index].label = result.data[0][index].SandbagName;
          result.data[0][index].address = result.data[0][index].SandbagLocation;
        }
      }
      // CHANGE SandbagStatus check to Open for production
      setSandbagsLocations(
        result.data[0].filter((location) => location.SandbagStatus === 'Closed')
      );
    } catch (error) {
      console.log(error);
    }
  };

  const updateMapCenter = (lat, lng, id) => {
    setCenter({ lat: parseFloat(lat), lng: parseFloat(lng) });
    updateSelectedMarker(id);
  };

  const updateSelectedMarker = (id) => {
    setSelectedMarker(id);
  };

  useEffect(() => {
    getSandbagsLocations();
    updatePageTitle('Elsa | Sandbags');
    updatePageHeading('Hurricane Elsa');
  }, []);

  return (
    <IncidentLayout title='Sandbag Locations'>
      <Grid container>
        {sandbagsLocations && sandbagsLocations.length > 0 ? (
          <>
            <Grid item xs={12}>
              <Map
                data={sandbagsLocations}
                center={center}
                selectedMarker={selectedMarker}
              />
            </Grid>
            <Grid item xs={12}>
              <SandbagsTable
                headCells={headCells}
                rows={sandbagsLocations}
                updateMapCenter={updateMapCenter}
              />
            </Grid>
          </>
        ) : (
          <Grid item xs={12}>
            <Typography variant='h6'>
              There are currently no open sandbag locations.
            </Typography>
          </Grid>
        )}
      </Grid>
    </IncidentLayout>
  );
}
