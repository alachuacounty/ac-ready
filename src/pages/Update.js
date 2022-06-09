/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import moment from 'moment';
import parse from 'html-react-parser';

import IncidentLayout from '../components/Branding/IncidentLayout';
import ACRButton from '../components/ACRButton';
import { incidentsContext } from '../contexts/IncidentsContext';
import { titleContext } from '../contexts/TitleContext';

const useStyles = makeStyles((theme) => ({
  publish: {
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  lastupdated: {
    fontStyle: 'italic',
  },
  hidden: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
}));

export default function UpdateContent({ incidentIndex }) {
  const params = useParams();
  const classes = useStyles();
  const { updatePageTitle, updatePageHeading } = useContext(titleContext);
  const { incidents } = useContext(incidentsContext);

  const [update, setUpdate] = useState(null);
  const [incidentName, setIncidentName] = useState('');

  useEffect(() => {
    if (incidents && incidents.length && incidents[0].updates) {
      setIncidentName(incidents[0].name);
      const updateData = incidents[0].updates.find(
        (data) => data.id === params.UpdateID
      );
      setUpdate(updateData);
      updatePageTitle(`${incidents[incidentIndex].name} | Update`);
      updatePageHeading(incidents[incidentIndex].name);
    }
  }, [incidents, params.UpdateID]);

  return update ? (
    <IncidentLayout title={`${incidentName} Update`} title2={update.title}>
      <Grid container xs={12} spacing={3}>
        <Grid item xs={12} marginBottom={4}>
          <Typography className={classes.publish}>
            {`Published on ${moment(update.publishDate).format(
              'MM/DD/YYYY HH:mm A'
            )}`}
          </Typography>
          <Typography className={classes.lastupdated}>
            {update.updateDate &&
              `Last updated on ${moment(update.updateDate)
                .local()
                .format('MM/DD/YYYY HH:mm A')}`}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {update.updateContent && parse(update.updateContent)}
        </Grid>
        <Grid item xs={12}>
          <ACRButton
            text='View all updates'
            link={`/incidents/${incidents[incidentIndex].urlName}/latestupdates`}
            size='small'
          />
        </Grid>
      </Grid>
    </IncidentLayout>
  ) : (
    <Typography variant='h5' sx={{ my: 10, textAlign: 'center' }}>
      No Update found with ID: {params.UpdateID}
    </Typography>
  );
}
