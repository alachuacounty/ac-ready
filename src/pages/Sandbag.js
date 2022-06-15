/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Geocode from 'react-geocode';

import IncidentLayout from '../components/Branding/IncidentLayout';
import { titleContext } from '../contexts/TitleContext';
import { breadCrumbsContext } from '../contexts/BreadCrumbsContext';
import { Grid, Typography } from '@mui/material';
import Map from '../components/Map';
import SandbagsTable from '../components/Tables/Sandbags';
import { incidentsContext } from '../contexts/IncidentsContext';

Geocode.setApiKey(`AIzaSyBRbdKmyFU_X9r-UVmsapYMcKDJQJmQpAg`);
Geocode.setLocationType('ROOFTOP');

const headCells = [
  {
    id: 'dataid',
    label: '',
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
    id: 'Limitations',
    label: 'Limitations',
  },
  {
    id: 'Details',
    label: 'Details',
  },
];

export default function Shelter({ incidentIndex }) {
  const { updatePageTitle, updatePageHeading } = useContext(titleContext);
  const { pushBreadCrumbs } = useContext(breadCrumbsContext);
  const { incidents } = useContext(incidentsContext);
  const [center, setCenter] = useState({ lat: 29.651634, lng: -82.324829 });
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [sandbagsLocations, setSandbagsLocations] = useState([]);

  const getSandbagsLocations = async () => {
    try {
      const result = await axios.get(`https://api.alachuacounty.us/incidents-api/distributionlocations/activesandbagslocations`);

      for (let index in result.data[0]) {
        const response = await Geocode.fromAddress(result.data[0][index].Location);
        if (response.results[0]) {
          const { lat, lng } = response.results[0].geometry.location;
          result.data[0][index].latitude = lat;
          result.data[0][index].longitude = lng;
          result.data[0][index].dataid = result.data[0][index].MondayID;
          result.data[0][index].label = result.data[0][index].LocationName;
          result.data[0][index].address = result.data[0][index].Location;
        }
      }
      // CHANGE SandbagStatus check to Open for production
      setSandbagsLocations(result.data[0]);
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
    updatePageTitle(`${incidents[incidentIndex].name} | Sandbags`);
    updatePageHeading(incidents[incidentIndex].name);
    pushBreadCrumbs({
      crumb: incidents[incidentIndex].name,
      link: `/incidents/${incidents[incidentIndex].urlName}/`,
    });
  }, []);

  return (
    <IncidentLayout title='Sandbag Locations'>
      <Grid container>
        {sandbagsLocations && sandbagsLocations.length > 0 ? (
          <>
            <Grid item xs={12}>
              <Map data={sandbagsLocations} center={center} selectedMarker={selectedMarker} />
            </Grid>
            <Grid item xs={12}>
              <SandbagsTable headCells={headCells} rows={sandbagsLocations} updateMapCenter={updateMapCenter} />
            </Grid>
          </>
        ) : (
          <Grid item xs={12}>
            <Typography variant='h6'>There are currently no open sandbag locations.</Typography>
          </Grid>
        )}
      </Grid>
    </IncidentLayout>
  );
}
