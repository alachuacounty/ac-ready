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
          p={4}
          textAlign='center'
        >
          <Grid item xs={12} md={6}>
            <Typography>testing here</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            width='30px'
            sx={{
              display: 'flex',
              alignContent: 'space-between',
              flexDirection: 'column',
            }}
          >
            <ACRButton text='Nishant' size='mediumButton'></ACRButton>
            <ACRButton text='Nishant' size='jumbo'></ACRButton>
            <ACRButton text='Nishant' size='jumbo'></ACRButton>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
