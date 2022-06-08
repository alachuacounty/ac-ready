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

export default function RoadClosures({ incidentIndex }) {
  const { updatePageTitle, updatePageHeading } = useContext(titleContext);
  const { pushBreadCrumbs } = useContext(breadCrumbsContext);
  const { incidents } = useContext(incidentsContext);

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
            Road Closures
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ paddingLeft: '0 !important' }}>
          <RoadsTable data={roadClosures} />
        </Grid>
        <Grid item xs={12} sx={{ paddingLeft: '0 !important' }}>
          <Typography variant='h6' sx={TypographyStyles}>
            Road Openings
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ paddingLeft: '0 !important' }}>
          <RoadsTable data={roadOpened} />
        </Grid>

        <Grid item xs={12} mt={6} sx={{ paddingLeft: '0 !important' }}>
          <Divider height='30px'></Divider>
          <Typography variant='h6' sx={TypographyStyles}>
            This is some typography that you can click on the map and it will
            allow you to do something!
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
