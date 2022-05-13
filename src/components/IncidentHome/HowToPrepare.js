import * as React from 'react';

import { Button, Link, Typography, Grid } from '@mui/material';
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
      <Grid container xs={12} justifyContent='center'>
        <Grid container item xs={6} justifyContent='flex-start'>
          <Typography variant='h5' textAlign='left' className={classes.title}>
            How to Prepare
          </Typography>
        </Grid>
        <Grid item xs={3} bgColor='cyan'>
          <ACRButton text='TESTING' size='jumbo' invert='true' />
          <ACRButton text='TESTING' size='jumbo' invert='true' />
          <ACRButton text='TESTING' size='jumbo' invert='true' />
        </Grid>
      </Grid>
    </div>
  );
}
