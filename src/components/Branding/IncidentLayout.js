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


const blurbTitle = 'Sign Up for Emergency Alerts';
const blurbText = 'Text "Alachua" to 888777 to receive real-time County updates during a large-scale incident or emergency';
const blurbTitle2 = "Don't see the information you're looking for?";
const blurbText2 = 'Call 311';

export default function IncidentLayout({
  children,
  title = 'Page Title',
  title2,
}) {
  const classes = useStyles();
  return (
    <Grid container xs={12} spacing={3} justifyContent='center' ml={0}>
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
        <Grid item xs={10} md={8} mb={'5% !important'}>
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

          <Grid item xs={12}>
            <EmergencyBlurb title={blurbTitle} text={blurbText} removePadding={true} />

            <EmergencyBlurb title={blurbTitle2} text={blurbText2} />
          </Grid>

        </Grid>
      </Grid>
    </Grid>
  );
}
