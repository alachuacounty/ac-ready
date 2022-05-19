/* eslint-disable react-hooks/exhaustive-deps */
import { Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';

import IncidentLayout from '../components/Branding/IncidentLayout';
import RoadsTable from '../components/Tables/Roads';
import { titleContext } from '../contexts/TitleContext';

const TypographyStyles = { fontWeight: 'bold' };

export default function RoadClosures() {
  const { updatePageTitle, updatePageHeading } = useContext(titleContext);

  const [roadClosures, setRoadClosures] = useState([]);
  const [roadOpened, setRoadOpened] = useState([]);

  const getRoadClosures = async () => {
    try {
      const result = await axios(
        `https://api.alachuacounty.us/hurricane-next-api/apidev/getRoadClosures`
      );
      if (result.data && result.data.length) {
        const sortedData = result.data[0].sort((a, b) =>
          a.RoadDateTime < b.RoadDateTime
            ? 1
            : b.RoadDateTime < a.RoadDateTime
              ? -1
              : 0
        );

        const open = [];
        const closed = [];
        sortedData.forEach((road) => {
          if (road.Published === 'Yes') {
            if (road.Category === 'Closures') closed.push(road);
            if (road.Category === 'Openings') open.push(road);
          }
        });
        setRoadClosures([...closed]);
        setRoadOpened([...open]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRoadClosures();
    updatePageTitle('Elsa | Road Closures');
    updatePageHeading('Hurricane Elsa');
  }, []);

  return (
    <IncidentLayout title='Road Closures'>
      <Grid container spacing={3} paddingBottom={6}>
        <Grid item xs={12}>
          <iframe
            src='https://acgm.maps.arcgis.com/apps/dashboards/a8dc1365c2a74de8b38c53e009476357'
            title='Interactive Road Closure Map'
            width='100%'
            height='600'
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h6' sx={TypographyStyles}>
            Road Closures
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <RoadsTable data={roadClosures} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h6' sx={TypographyStyles}>
            Road Openings
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <RoadsTable data={roadOpened} />
        </Grid>
      </Grid>
    </IncidentLayout>
  );
}
