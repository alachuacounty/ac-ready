import React from 'react';
import imageleftblack from '../../images/imageleftblack.jpg';
import imageright from '../../images/imageright.jpg';
import acr_logo from '../../images/ACR_logo.png';
import { Grid, Typography, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: 'auto',
    padding: '4% 0',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
      textAlign: 'center!important',
    },
  },
  acemSection: {
    [theme.breakpoints.down('md')]: {
      padding: '1% 0',
      justifyContent: 'center',
    },
  },
  readyGovSection: {
    [theme.breakpoints.down('md')]: {
      padding: '1% 0',
    },
  },
  middle: {
    [theme.breakpoints.up('md')]: {
      justifyContent: 'center!important',
    },
  },
  imgleft: {
    [theme.breakpoints.down('lg')]: {
      justifyContent: 'center!important',
    },
  },
  link: {
    color: '#12264c!important',
    textDecorationColor: '#12264c!important',
  },
  img: {
    maxWidth: '400px',
    width: '100%',
    [theme.breakpoints.down('lg')]: {
      justifyContent: 'center!important',
      display: 'flex',
    },
    text: {
      fontSize: '20px',
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
          <Typography fontWeight='700!important' variant='h4'>
            PREPARE
          </Typography>
        </Grid>
        <Grid item xs={0} lg={2} className={classes.left}></Grid>

        <Grid
          item
          container
          lg={8}
          margin='auto!important'
          className={classes.middle}
        >
          <Grid item lg={12} className={classes.acemSection} container>
            <Grid
              item
              xs={12}
              lg={6}
              display='flex'
              className={classes.imgleft}
            >
              <Link href='https://alachuacounty.us/Depts/EM/Pages/EM.aspx'>
                <img
                  className={classes.img}
                  src={imageleftblack}
                  alt='Image of Alachua County Emergency Management'
                />
              </Link>
            </Grid>
            <Grid
              item
              className={classes.text}
              lineHeight='2.3rem!important'
              p={2}
              xs={12}
              lg={6}
            >
              <Typography variant='h4' gutterBottom>
                <Link
                  className={classes.link}
                  href='https://alachuacounty.us/Depts/EM/Pages/EM.aspx'
                >
                  Alachua County Emergency Management
                </Link>
              </Typography>
              <Typography variant='p' paragraph gutterBottom>
                Visit the Emergency Management Website for more preparedness
                information and other resources
              </Typography>
              <Link
                className={classes.link}
                href='https://alachuacounty.us/Depts/EM/Pages/EM.aspx'
              >
                VISIT ALACHUA COUNTY EMERGENCY MANAGEMENT WEBSITE
              </Link>
            </Grid>
          </Grid>
          <Grid
            item
            lg={12}
            className={classes.readyGovSection}
            justifyContent='right'
            display='flex'
            container
            sx={{
              flexFlow: { xs: 'column-reverse', md: 'row' },
            }}
          >
            <Grid
              item
              className={classes.text}
              lineHeight='2.5rem!important'
              p={2}
              xs={12}
              lg={6}
            >
              <Typography variant='h4' paragraph>
                <Link
                  className={classes.link}
                  href='https://www.fema.gov/press-release/20210318/how-build-kit-emergencies'
                >
                  Disaster Supply Kit
                </Link>
              </Typography>
              <Typography variant='p' paragraph>
                Visit Ready.gov to get information on building your disaster
                supply kit before an emergency happens.
              </Typography>

              <Link className={classes.link} href='https://www.ready.gov/kit'>
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
              <Link href='https://www.ready.gov/kit'>
                <img
                  className={classes.img}
                  src={imageright}
                  alt='Image of hurricane emergency supplies on a table'
                />
              </Link>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={0} lg={2} className={classes.right}></Grid>
      </Grid>
      <hr className={classes.firsthr} />
      <hr className={classes.secondhr} />
      <hr className={classes.thirdhr} />
    </div>
  );
}
