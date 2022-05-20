import { Grid, Typography } from '@mui/material';
import React from 'react';

import EmergencyBlurb from '../EmergencyBlurb';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  title2: {
    fontWeight: 'bold',
  },
  hidden: {
    [theme.breakpoints.down('md')]: {
      //display: 'none',
    },
  },
}));

export default function IncidentLayout({
  children,
  title = 'Page Title',
  title2,
}) {
  const classes = useStyles();
  return (
    <Grid
      container
      xs={12}
      spacing={3}
      justifyContent='center'
      ml={0}
      mb={'5% !important'}
    >
      <Grid item xs={12}>
        <Typography
          variant='h4'
          textAlign='center'
          sx={{ my: 4 }}
          className={classes.title}
        >
          {title}
        </Typography>
        {title2 && (
          <Typography
            variant='h4'
            textAlign='center'
            sx={{ my: 4 }}
            className={classes.title2}
          >
            {title2}
          </Typography>
        )}
      </Grid>
      <Grid container xs={12} md={12} lg={10} justifyContent='center'>
        <Grid item xs={10} md={8}>
          {children}
        </Grid>

        <Grid
          item
          container
          xs={12}
          md={3}
          justifyContent='flex-end'
          className={classes.hidden}
        >
          <EmergencyBlurb />
        </Grid>
      </Grid>
    </Grid>
  );
}
