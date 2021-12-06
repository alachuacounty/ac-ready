import React from 'react';

import acr_logo from '../../images/ACR_logo.png';
import { Grid, Typography, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  wrapper: {
    background: 'magenta',
    height: 'auto',
  },
  left: {
    background: 'red',
  },
  middle: {
    background: 'pink',
  },
  right: {
    background: 'blue',
  },
  leftinner: {
    height: '300px',
    background: 'green',
  },
  rightinner: {
    height: '300px',
    background: 'purple',
  },
  imgleft: {
    height: '260px',
    background: 'orange',
  },
  textright: {
    height: '260px',
    background: 'pink',
  },
});

export default function PreparedGrid() {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.wrapper}>
        <Grid item xs={0} lg={1} className={classes.left}></Grid>
        <Grid item container lg={10} className={classes.middle}>
          <Grid item lg={12} className={classes.leftinner} container>
            <Grid item lg={6} className={classes.imgleft} lg={6}></Grid>
            <Grid item className={classes.textright} lg={6}></Grid>
          </Grid>
          <Grid item lg={12} className={classes.leftinner} container>
            <Grid item className={classes.textright} xs={12} lg={6}></Grid>
            <Grid item className={classes.imgleft} xs={12} lg={6}></Grid>
          </Grid>
        </Grid>
        <Grid item xs={0} lg={1} className={classes.left}></Grid>
      </Grid>
    </div>
  );
}
