import React from 'react';
import imageleftblack from '../../images/imageleftblack.jpg';
import acr_logo from '../../images/ACR_logo.png';
import { Grid, Typography, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: 'auto',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
  },

  img: {
    maxWidth: '350px',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
  },
  /*STYLES FOR HR HERE*/
  hr: {
    margin: 0,
    height: '5px !important',
    padding: 0,
  },
  firsthr: {
    borderStyle: 'solid',
    borderColor: '#12264c !important',
    backgroundColor: '#12264c !important',
    border: 'solid 5px #12264c',
    borderWidth: 'thick',
    zIndex: 999,
    padding: 0,
  },
  secondhr: {
    borderStyle: 'solid',
    borderColor: '#1968b1',
    backgroundColor: '#1968b1 !important',
    border: 'solid 5px #1968b1',
    borderWidth: 'thick',
    zIndex: 999,
    padding: 0,
  },
  thirdhr: {
    borderStyle: 'solid',
    borderColor: '#4a97d3 !important',
    backgroundColor: '#4a97d3 !important',
    border: 'solid 5px#4a97d3',
    borderWidth: 'thick',
    zIndex: 999,
    padding: 0,
  },

  /*STYLES FOR HR HERE*/
}));

export default function PreparedGrid() {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.wrapper}>
        <Grid item container p={2} justifyContent='center'>
          <Typography variant='h4'>PREPARE</Typography>
        </Grid>
        <Grid item xs={0} lg={1} className={classes.left}></Grid>
        <Grid item container lg={10} className={classes.middle}>
          <Grid item lg={12} className={classes.leftinner} container>
            <Grid
              item
              xs={12}
              lg={6}
              display='flex'
              className={classes.imgleft}
              justifyContent='center'
            >
              <img
                justifyContent='center'
                className={classes.img}
                src={imageleftblack}
              />
            </Grid>
            <Grid item className={classes.textright} p={2} xs={12} lg={6}>
              <Typography variant='h5' paragraph gutterBottom>
                Alachua County Emergency Management
              </Typography>
              <Typography variant='p' paragraph gutterBottom>
                Visit the Emergency Management Website for more preparedness
                information and other resources
              </Typography>
              <Link> VISIT ALACHUA COUNTY EMERGENCY MANAGEMENT WEBSITE</Link>
            </Grid>
          </Grid>
          <Grid
            item
            lg={12}
            className={classes.leftinner}
            justifyContent='center'
            display='flex'
            container
            sx={{
              flexFlow: { xs: 'column-reverse', md: 'row' },
            }}
          >
            <Grid item className={classes.textright} p={2} xs={12} lg={6}>
              <Typography variant='h5' paragraph>
                Alachua County Emergency Management
              </Typography>
              <Typography variant='p' paragraph>
                Visit the Emergency Management Website for more preparedness
                information and other resources
              </Typography>

              <Link> VISIT ALACHUA COUNTY EMERGENCY MANAGEMENT WEBSITE</Link>
            </Grid>
            <Grid item className={classes.imgleft} xs={12} lg={6}>
              <img className={classes.img} src={imageleftblack} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={0} lg={1} className={classes.left}></Grid>
      </Grid>
      <hr className={classes.firsthr} />
      <hr className={classes.secondhr} />
      <hr className={classes.thirdhr} />
    </div>
  );
}
