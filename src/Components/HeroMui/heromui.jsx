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
  secondTagline: {
    color: '#1968b1',
  },
  borderbottom: {
    borderBottom: '2 solid purple',
  },
  heroContent: {
    color: '#12264c;',
  },
});

export default function HeroGrid() {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid item container     >
          <Grid item container className={classes.test} xs={12} lg={6}  >
            <Grid item className={classes.left} xs={0} lg={4}></Grid>
            <Grid
              item
              container
              xs={12}
              lg={8}
              justify='center'
              alignContent='end'
         
              p={2}
              className={classes.borderbottom}
            >
              <Typography className={classes.heroContent} variant='h4'>
                WHEN DISASTER STRIKES
              </Typography>
              <br></br>
              <Typography
                lg={4}
                className={(classes.content, classes.secondTagline)}
                variant='h4'
              >
                STAY INFORMED
              </Typography>
           

            <Grid item className={classes.left} xs={0} lg={4}></Grid>
            <Grid
              item
              container
              xs={12}
              lg={8}
              p={2}
              justify='center'
              alignContent='start'
              
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

          <Grid  sx={{ flexDirection: { xs: "row-reverse",lg:'column'  }}} item xs={12} md={12} lg={6} xl={6}>
            <img className={classes.image} src={hero2} alt='' />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
