/* eslint-disable react-hooks/exhaustive-deps */
import { Grid, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Geocode from 'react-geocode';

import IncidentLayout from '../components/Branding/IncidentLayout';
import Map from '../components/Map';
import { titleContext } from '../contexts/TitleContext';
import { breadCrumbsContext } from '../contexts/BreadCrumbsContext';
import Shelters from '../components/Tables/Shelters';
import { incidentsContext } from '../contexts/IncidentsContext';

Geocode.setApiKey(`AIzaSyBRbdKmyFU_X9r-UVmsapYMcKDJQJmQpAg`);
Geocode.setLocationType('ROOFTOP');

const headCells = [
  {
    id: 'dataid',
    label: '',
  },
  {
    id: 'ShelterName',
    label: 'Shelter Name',
  },
  {
    id: 'Location',
    label: 'Address',
  },
  {
    id: 'Status',
    label: 'Status',
  },
  {
    id: 'ShelterType',
    label: 'Pet Friendly',
  },
  {
    id: 'ShelterType',
    label: 'Special Needs',
  },
];

export default function Shelter({ incidentIndex }) {
  const { updatePageTitle, updatePageHeading } = useContext(titleContext);
  const { pushBreadCrumbs } = useContext(breadCrumbsContext);
  const { incidents } = useContext(incidentsContext);
  const [center, setCenter] = useState({ lat: 29.651634, lng: -82.324829 });
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [shelterData, setShelterData] = useState([]);

  const getShelterData = async () => {
    try {
      const test = await axios.get(
        `https://ads86.alachuacounty.us/incidents-api/shelters/active`
      );

      for (let index in test.data[0]) {
        const response = await Geocode.fromAddress(
          test.data[0][index].Location
        );
        if (response.results[0]) {
          const { lat, lng } = response.results[0].geometry.location;
          test.data[0][index].latitude = lat;
          test.data[0][index].longitude = lng;
          test.data[0][index].dataid = test.data[0][index].MondayID;
          test.data[0][index].label = test.data[0][index].ShelterName;
          test.data[0][index].address = test.data[0][index].Location;
        }
      }

      setShelterData(test.data[0]);
      console.log(test.data[0]);
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
    updatePageTitle(`${incidents[incidentIndex].name} | Shelters`);
    updatePageHeading(incidents[incidentIndex].name);
    pushBreadCrumbs({
      crumb: incidents[incidentIndex].name,
      link: `/incidents/${incidents[incidentIndex].urlName}/`,
    });
  }, []);

  return (
    <IncidentLayout title='Find a Shelter'>
      <Grid container>
        {shelterData && shelterData.length > 0 ? (
          <>
            <Grid item xs={12}>
              <Typography variant='h6' py={4} sx={{ fontWeight: 'bold' }}>
                *In case of an emergency, please go to the nearest shelter, even
                if it is full.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Map
                data={shelterData}
                center={center}
                selectedMarker={selectedMarker}
              />
            </Grid>
            <Grid item xs={12}>
              <Shelters
                headCells={headCells}
                rows={shelterData}
                updateMapCenter={updateMapCenter}
              />
            </Grid>
          </>
        ) : (
          <Grid item xs={12}>
            <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
              There are currently no open emergency shelters.
            </Typography>
          </Grid>
        )}
      </Grid>
    </IncidentLayout>
  );
}
