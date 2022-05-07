import { Button, Grid, Link, Typography } from '@mui/material';

import useStyles from './NotifyStyles';

export default function Notify() {
  const classes = useStyles();

  return (
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
            <Typography
              paragraph='true'
              className={classes.content}
              variant='h6'
            >
              To receive automated weather alerts or time-sensitive information
              for your area, sign up for the{' '}
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
            <Typography
              paragraph='true'
              className={classes.content}
              variant='h6'
            >
              This is the best way to stay informed about local severe weather,
              unexpected road closures, building or neighborhood evacuations,
              and so much more.
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              paragraph='true'
              className={classes.content}
              variant='h6'
            >
              You will receive time-sensitive messages wherever you specify,
              such as your home, mobile, or business phones, email address, text
              messages, and more. You pick where, you pick how!
            </Typography>
          </Grid>

          <Grid marginTop='3%!important' item>
            <Link href='https://member.everbridge.net/index/453003085613764#/signup'>
              {/*  <Button className={classes.button} variant='contained'>
                  SIGN UP
                </Button> */}
              <Button role='button' className={classes.button66}>
                SIGN UP
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
