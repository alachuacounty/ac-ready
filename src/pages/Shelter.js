import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import IncidentLayout from '../components/Branding/IncidentLayout';
import ShelterMapandTable from '../components/Shelter/sheltermapandtable';
import SheltersTable from '../components/Tables/Shelters';
import Map from '../components/Map';

const headCells = [
  {
    id: 'dataid',
    label: '',
  },
  {
    id: 'label',
    label: 'Shelter Name',
  },
  {
    id: 'capacity',
    label: 'Total Capacity',
  },
  {
    id: 'availability',
    label: 'Availability',
  },
  {
    id: 'pet_friendly',
    label: 'Pet Friendly',
  },
  {
    id: 'functional_needs',
    label: 'Special Needs',
  },
];

export default function Shelter() {
  const [center, setCenter] = useState({ lat: 29.651634, lng: -82.324829 });
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [shelterData, setShelterData] = useState([]);

  const getShelterData = async () => {
    try {
      const result = await axios.get(
        `https://api.alachuacounty.us/hurricane-next-api/apidev/getShelterData`
      );
      setShelterData(
        result.data.filter((shelter) => shelter.status === 'OPEN')
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
    getShelterData();
  }, []);

  return (
    <IncidentLayout title='Find a Shelter'>
      <Grid container>
        {shelterData && shelterData.length > 0 ? (
          <>
            <Grid item xs={12}>
              <Map
                shelters={shelterData}
                center={center}
                selectedMarker={selectedMarker}
              />
            </Grid>
            <Grid item xs={12}>
              <SheltersTable
                headCells={headCells}
                rows={shelterData}
                updateMapCenter={updateMapCenter}
              />
            </Grid>
          </>
        ) : (
          <Grid item xs={12}>
            <Typography variant='h6'>
              There are currently no open emergency shelters.
            </Typography>
          </Grid>
        )}
      </Grid>
    </IncidentLayout>
  );
}
