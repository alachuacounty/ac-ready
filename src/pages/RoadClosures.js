/* eslint-disable react-hooks/exhaustive-deps */
import { Grid, Typography, Divider } from '@mui/material';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';

import IncidentLayout from '../components/Branding/IncidentLayout';
import RoadsTable from '../components/Tables/Roads';
import { titleContext } from '../contexts/TitleContext';
import { breadCrumbsContext } from '../contexts/BreadCrumbsContext';
import { incidentsContext } from '../contexts/IncidentsContext';

const TypographyStyles = { fontWeight: 'bold' };

const headCells = [
  { id: 'RoadName', label: 'Road Name' },
  { id: 'Status', label: 'Status' },
];

export default function RoadClosures({ incidentIndex }) {
  const { updatePageTitle, updatePageHeading } = useContext(titleContext);
  const { pushBreadCrumbs } = useContext(breadCrumbsContext);
  const { incidents } = useContext(incidentsContext);

  const [roads, setRoads] = useState([]);

  const getRoadClosures = async () => {
    try {
      const result = await axios(
        `https://ads86.alachuacounty.us/incidents-api/roadclosures/active`
      );
      if (result.data && result.data.length) {
        setRoads(result.data[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRoadClosures();
    updatePageTitle(`${incidents[incidentIndex].name} | Road Closures`);
    updatePageHeading(incidents[incidentIndex].name);
    pushBreadCrumbs({
      crumb: incidents[incidentIndex].name,
      link: `/incidents/${incidents[incidentIndex].urlName}/`,
    });
  }, []);

  return (
    <IncidentLayout title='Road Closures'>
      <Grid
        container
        spacing={3}
        sx={{ width: '100% !important' }}
        paddingBottom={6}
      >
        <Grid item xs={12} sx={{ paddingLeft: '0 !important' }}>
          <Typography variant='h6' sx={TypographyStyles}>
            Road Closures/Opening
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ paddingLeft: '0 !important' }}>
          <RoadsTable headCells={headCells} data={roads} />
        </Grid>

        <Grid item xs={12} mt={6} sx={{ paddingLeft: '0 !important' }}>
          <Divider height='30px'></Divider>
          <Typography py={2} variant='h6' sx={TypographyStyles}>
            Note: Click on a road from the Road List (Located Below Map) to see
            the road location on the map:
          </Typography>
        </Grid>

        <Grid item xs={12} sx={{ paddingLeft: '0 !important' }}>
          <iframe
            src='https://acgm.maps.arcgis.com/apps/dashboards/a8dc1365c2a74de8b38c53e009476357'
            title='Interactive Road Closure Map'
            width='100%'
            height='600'
          />
        </Grid>
      </Grid>
    </IncidentLayout>
  );
}
