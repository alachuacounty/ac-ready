import React from 'react';
import imageleftblack from '../../images/imageleftblack.jpg';
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
    background: 'green',
  },
  rightinner: {
    background: 'purple',
  },
  imgleft: {
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
            <Grid
              item
              xs={12}
              lg={6}
              className={classes.imgleft}
              justifyContent='center'
            >
              <img justify='center' src={imageleftblack} />
            </Grid>
            <Grid item className={classes.textright} p={2} xs={12} lg={6}>
              <Typography variant='h5'>
                Alachua County Emergency Management
              </Typography>
              <Typography variant='p'>
                Visit the Emergency Management Website for more preparedness
                information and other resources
              </Typography>
              <Link> VISIT ALACHUA COUNTY EMERGENCY MANAGEMENT WEBSITE</Link>
            </Grid>
          </Grid>
          <Grid item lg={12} className={classes.leftinner} container>
            <Grid item className={classes.textright} xs={12} lg={6}></Grid>
            <Grid item className={classes.imgleft} xs={12} lg={6}>
              {' '}
              <img textAlign='center' src={imageleftblack} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={0} lg={1} className={classes.left}></Grid>
      </Grid>
    </div>
  );
}
