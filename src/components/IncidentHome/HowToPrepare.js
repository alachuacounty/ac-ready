import * as React from 'react';

import { Typography, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

import ACRButton from '../ACRButton';

const useStyles = makeStyles((theme) => ({
  title: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
}));

export default function HowToPrepare() {
  const classes = useStyles();
  return (
    <div>
      <Grid container xs={12} spacing={3} justifyContent='center'>
        <Grid item xs={12} p={5}>
          <Typography variant='h5' className={classes.title} textAlign='left'>
            How to Prepare
          </Typography>
        </Grid>

        <Grid
          container
          xs={12}
          justifyContent='center'
          spacing={4}
          textAlign='center'
        >
          <Grid
            item
            xs={12}
            md={6}
            display='flex'
            justifyContent='left'
            alignContent='start'
          >
            <Typography pl={4}>Residents are encouraged to:</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid
              container
              // spacing={3}
              direction='column'
              justifyContent='center'
              alignItems='center'
            >
              <Grid item xs={8}>
                <ACRButton text='Ashvini Patel' size='jumbo' invert={true} />
              </Grid>
              <Grid item xs={7}>
                <ACRButton text='Tyler Sullivan' size='jumbo' invert={true} />
              </Grid>
              <Grid item xs={2}>
                <ACRButton text='Nishant Maurya' size='jumbo' invert={true} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
