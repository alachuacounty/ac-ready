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
    <Grid container p={2} className={classes.wrapper} direction='column' alignItems='center'>
      <Grid
        item
        xs={12}
      >
        <Typography fontSize='14px' variant='p' paddingBottom={2}>
          &copy; Alachua County
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Link
          className={classes.link}
          href='https://alachuacounty.us/Depts/EO/Pages/Website-Accessibility.aspx'
        >
          View Alachua County's Website Accessibility Policy and Procedures
        </Link>
      </Grid>
    </Grid>
  );
}
