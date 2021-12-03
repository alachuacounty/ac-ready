import React from 'react';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import hero2 from '../../images/fam_grey_crop.png';

const useStyles = makeStyles({
  image: {
    width: '100%',
  },
  positioning: {
    justifyContent: 'center',
  },
  test: {
    background: 'green',
  },
});

export default function HeroGrid() {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid item container>
          <Grid item container className={classes.test} xs={12} lg={6}>
            <Grid item className={classes.left} xs={0} lg={4}></Grid>
            <Grid
              item
              container
              xs={12}
              lg={8}
              justify='center'
              alignContent='end'
              p={2}
            >
              <Typography className={classes.content} variant='h4'>
                WHEN DISASTER STRIKES
              </Typography>
              <br></br>
              <Typography lg={4} className={classes.content} variant='h4'>
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
              alignContent='start'
            >
              <Typography className={classes.content} variant='h4'>
                WHEN DISASTER STRIKES
              </Typography>
              <br></br>
              <Typography lg={4} className={classes.content} variant='h4'>
                STAY INFORMED
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={12} md={12} lg={6} xl={6}>
            <img className={classes.image} src={hero2} alt='' />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
