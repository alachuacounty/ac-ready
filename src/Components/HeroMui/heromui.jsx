import React from 'react';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import hero2 from '../../images/fam_grey_crop.png';

const useStyles = makeStyles((theme) => ({
  image: {
    width: '100%',
  },
  positioning: {
    justifyContent: 'center',
  },
  secondTagline: {
    color: '#1968b1',
    [theme.breakpoints.down('md')]: {
      color: 'white',
    },
  },
  borderbottom: {
    borderBottom: '2 solid purple',
  },
  heroContent: {
    color: '#12264c;',
    [theme.breakpoints.down('md')]: {
      color: 'white',
    },
  },
  heroWrapper: {
    [theme.breakpoints.down('md')]: {
      background: '#12264c',
      color: 'white',
    },
  },
}));

export default function HeroGrid() {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid
          item
          container
          sx={{
            flexFlow: { xs: 'column-reverse', md: 'row' },
          }}
        >
          <Grid item container className={classes.test} xs={12} lg={6}>
            <Grid item className={classes.left} xs={0} lg={1}></Grid>
            <Grid
              item
              container
              xs={12}
              lg={10}
              justify='center'
              alignContent='center'
              sx={{
                justifyContent: { xs: 'center' },
              }}
              p={2}
              className={classes.borderbottom && classes.heroWrapper}
            >
              <Grid item>
                <Typography className={classes.heroContent} variant='h4'>
                  WHEN DISASTER STRIKES
                </Typography>

                <Typography
                  lg={4}
                  className={(classes.content, classes.secondTagline)}
                  variant='h4'
                >
                  STAY INFORMED
                </Typography>
              </Grid>
              <Grid item className={classes.left} xs={0} lg={4}></Grid>
              <Grid
                item
                container
                xs={12}
                lg={8}
                p={2}
                justify='center'
                sx={{ justifyContent: { xs: 'center', lg: 'left' } }}
                className={classes.heroContent}
              >
                <Typography className={classes.content} variant='h7'>
                  Text "ALACHUA" to 888777 <br />
                </Typography>
                <br></br>
                <Typography lg={4} className={classes.content} variant='h7'>
                  to receive real-time County updates
                </Typography>
                <br></br>
                <Typography lg={4} className={classes.content} variant='h7'>
                  during a large-scale incident or emergency
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            xs={12}
            md={12}
            lg={6}
            xl={6}
            sx={{ flexDirection: { xs: 'row', lg: 'left' } }}
          >
            <img className={classes.image} src={hero2} alt='' />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
