import React from 'react';
import { Grid } from '@mui/material';
import { Typography, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    background: theme.palette.darkblue.main,
    height: '1fr',
    color: 'white',
    [theme.breakpoints.down('md')]: {
      backgroundColor: 'white',
      boxShadow: '0 5px 5px rgb(18 38 76 / 15%), 0 5px 5px rgb(18 38 76 / 15%)',
      padding: '4% 2%',
    },
  },
  link: {
    color: 'white!important',
    [theme.breakpoints.down('md')]: {
      color: '#12264c!important',
    },
  },

  sectionpadding: {
    [theme.breakpoints.up('md')]: {
      padding: '2%',
    },
    [theme.breakpoints.up('md')]: {
      padding: '1%',
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
    height: '66px',
    width: '150px',
    backgroundColor: '#4a97d3!important',
    fontSize: '24px!important',
  },
}));

export default function NotifyGrid() {
  const classes = useStyles();
  return (
    <div>
      <Grid id='notified' container className={classes.wrapper}>
        <Grid
          item
          justifyContent='center'
          className={classes.sectionpadding}
          container
        >
          <Grid item justifyContent='center' container xs={12} lg={8} xl={8}>
            <Grid item>
              <Typography
                fontWeight='700!important'
                p={3}
                className={classes.content}
                variant='h4'
              >
                GET NOTIFIED
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.content} variant='h6'>
                To receive automated weather alerts or time-sensitive
                information for your area, sign up for the{' '}
                <Link
                  className={classes.link}
                  href='https://member.everbridge.net/index/453003085613764#/signup '
                >
                  <u>Alert Alachua Emergency Notification System</u>
                </Link>{' '}
                .
              </Typography>
            </Grid>

            <Grid item>
              <Typography className={classes.content} variant='h6'>
                This is the best way to stay informed about local severe
                weather, unexpected road closures, building or neighborhood
                evacuations, and so much more.
              </Typography>
            </Grid>

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
