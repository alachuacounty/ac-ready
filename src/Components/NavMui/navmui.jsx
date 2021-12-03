import React from 'react';

import aclogo from '../../images/Seal_of_Alachua_County_Florida.png';

import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({});

export default function AppBarGrid() {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.wrapper}>
        <Grid item xs={0} className={classes.first} lg={1}></Grid>
        <Grid
          item
          display='flex'
          container
          xs={12}
          lg={10}
          className={classes.middle}
        >
          <Grid item direction='row'>
            <img className={classes.logo} src={aclogo} alt='' />
          </Grid>
          <Grid item direction='row' alignSelf='center'>
            <Typography p={1} className={classes.text} variant='h5'>
              Alachua County
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={0} lg={1} className={classes.last}></Grid>
      </Grid>
    </div>
  );
}
