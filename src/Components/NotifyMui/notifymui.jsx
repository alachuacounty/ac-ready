import React from 'react';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';

const useStyles = makeStyles({
  wrapper: {
    background: '#12264c',
    height: '1fr',
    borderRadius: 9,
    color: 'white',
  },
  grid: {
    display: 'grid',
  },
  content: {
    textAlign: 'center',
    color: 'white',
  },

  button: {
    borderRight: '20px double #cfedfb!important',
    height: '56px',
    backgroundColor: '#4a97d3!important',
  },
});

export default function NotifyGrid() {
  const classes = useStyles();
  return (
    <div>
      <Grid id='notified' container p={4} className={classes.wrapper}>
        <Grid item container>
          <Grid item xs={0} lg={2} />
          <Grid item justifyContent='center' container xs={12} lg={8}>
            <Grid item>
              <Typography p={4} className={classes.content} variant='h4'>
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
            <Grid item>
              <Button className={classes.button} p={8} variant='contained'>
                SIGN UP
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={0} lg={2} />
        </Grid>
      </Grid>
    </div>
  );
}
