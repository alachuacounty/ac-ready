import { Grid, Link, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.darkblue.main,
    height: 'auto',
    color: 'white',
  },
  link: {
    color: 'white!important',
    textDecorationColor: 'white!important',
    fontSize: '14px!important',
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Grid container xs={12} p={2} className={classes.wrapper}>
      <Grid item xs={0} lg={4}></Grid>
      <Grid
        item
        xs={12}
        sm={12}
        lg={4}
        display='flex'
        justifyContent='center'
        alignContent='center'
        textAlign='center'
        direction='column'
      >
        <Grid item>
          <Typography fontSize='14px' variant='p'>
            &copy; Alachua County
          </Typography>
        </Grid>
        <Grid item>
          <Link
            className={classes.link}
            href='https://alachuacounty.us/Depts/EO/Pages/Website-Accessibility.aspx'
          >
            View Alachua County's Website Accessibility Policy and Procedures
          </Link>
        </Grid>
      </Grid>
      <Grid item xs={0} lg={4}></Grid>
    </Grid>
  );
}
