import { Grid, Typography } from '@mui/material';
import React from 'react';

import EmergencyBlurb from '../EmergencyBlurb';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  hidden: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
}));

export default function IncidentLayout({ children, title = 'Page Title' }) {
  const classes = useStyles();
  return (
    <Grid container xs={12} spacing={3} justifyContent='center'>
      <Grid item xs={12}>
        <Typography
          variant='h4'
          textAlign='center'
          sx={{ my: 4 }}
          className={classes.title}
        >
          {title}
        </Typography>
      </Grid>
      <Grid container item xs={10} md={10} justifyContent='center'>
        <Grid item xs={12} md={9}>
          {children}
        </Grid>

        <Grid
          container
          item
          xs={0}
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
