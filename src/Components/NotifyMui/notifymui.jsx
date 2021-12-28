import React from 'react';
import { Grid } from '@mui/material';
import { Typography, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    background: '#12264c',
    height: '1fr',
    borderRadius: 9,
    color: 'white',
    [theme.breakpoints.down('md')]: {
      backgroundColor: 'white',
    },
  },
  grid: {
    display: 'grid',
  },
  content: {
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      color: '#12264c',
    },
  },

  button: {
    borderRight: '20px double #cfedfb!important',
    height: '56px',
    backgroundColor: '#4a97d3!important',
  },
}));

export default function NotifyGrid() {
  const classes = useStyles();
  return (
    <div>
      <Grid id='notified' container className={classes.wrapper}>
        <Grid item justifyContent='center' p={5} container>
          <Grid item justifyContent='center' container xs={12} lg={8}>
            <Grid item>
              <Typography p={3} className={classes.content} variant='h4'>
                GET NOTIFIED
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.content} variant='h6'>
                This is the best way to stay informed about local severe
                weather, unexpected road closures, building or neighborhood
                evacuations, and so much more.
              </Typography>
            </Grid>
            <br></br>
            <Grid item>
              <Typography className={classes.content} variant='h6'>
                You will receive time-sensitive messages wherever you specify,
                such as your home, mobile, or business phones, email address,
                text messages, and more. You pick where, you pick how!
              </Typography>
            </Grid>

            <Grid marginTop='3%!important' item>
              <Link href='https://member.everbridge.net/index/453003085613764#/signup'>
                <Button className={classes.button} variant='contained'>
                  SIGN UP
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
