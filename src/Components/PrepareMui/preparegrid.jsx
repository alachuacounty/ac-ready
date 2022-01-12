import React from 'react';
import imageleftblack from '../../images/imageleftblack.jpg';
import imageright from '../../images/imageright.jpg';
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
  middle: {
    [theme.breakpoints.up('md')]: {
      maxWidth: '1000px!important',
    },
  },
  imgleft: {
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center!important',
      margin: 'auto!important',
    },
  },
  img: {
    maxWidth: '350px',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center!important',
    },
    textright: {
      [theme.breakpoints.down('md')]: {
        textAlign: 'center!important',
      },
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
      <Grid id='prepared' container className={classes.wrapper}>
        <Grid item container p={2} justifyContent='center'>
          <Typography variant='h4'>PREPARE</Typography>
        </Grid>
        <Grid item xs={0} lg={2} className={classes.left}></Grid>
        <Grid
          item
          container
          lg={8}
          margin='auto!important'
          className={classes.middle}
        >
          <Grid item lg={12} className={classes.leftinner} container>
            <Grid
              item
              xs={12}
              lg={6}
              display='flex'
              className={classes.imgleft}
              justifyContent='left'
            >
              <img
                justifyContent='center'
                className={classes.img}
                src={imageleftblack}
              />
            </Grid>
            <Grid item className={classes.textright} p={2} xs={12} lg={6}>
              <Typography variant='h5' paragraph gutterBottom>
                <Link href='https://alachuacounty.us/Depts/EM/Pages/EM.aspx'>
                  Alachua County Emergency Management
                </Link>
              </Typography>
              <Typography variant='p' paragraph gutterBottom>
                Visit the Emergency Management Website for more preparedness
                information and other resources
              </Typography>
              <Link href='https://alachuacounty.us/Depts/EM/Pages/EM.aspx'>
                VISIT ALACHUA COUNTY EMERGENCY MANAGEMENT WEBSITE
              </Link>
            </Grid>
          </Grid>
          <Grid
            item
            lg={12}
            className={classes.leftinner}
            justifyContent='right'
            display='flex'
            container
            sx={{
              flexFlow: { xs: 'column-reverse', md: 'row' },
            }}
          >
            <Grid item className={classes.textright} p={2} xs={12} lg={6}>
              <Typography variant='h5' paragraph>
                <Link href='https://www.fema.gov/press-release/20210318/how-build-kit-emergencies'>
                  Disaster Supply Kit
                </Link>
              </Typography>
              <Typography variant='p' paragraph>
                Visit Ready.gov to get information on building your disaster
                supply kit before an emergency happens.
              </Typography>

              <Link href='https://www.ready.gov/kit'>
                VISIT READY.GOV WEBSITE
              </Link>
            </Grid>
            <Grid
              item
              justifyContent='right'
              display='flex'
              className={classes.imgleft}
              xs={12}
              lg={6}
            >
              <img className={classes.img} src={imageright} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={0} lg={2} className={classes.left}></Grid>
      </Grid>
      <hr className={classes.firsthr} />
      <hr className={classes.secondhr} />
      <hr className={classes.thirdhr} />
    </div>
  );
}
