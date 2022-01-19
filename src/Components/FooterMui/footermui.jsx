import React from 'react';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from '@mui/material';

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

export default function FooterGrid() {
  const classes = useStyles();
  return (
    <div>
      <Grid container xs={12} p={2} className={classes.wrapper}>
        <Grid item xs={0} sm={0} lg={4}></Grid>
        <Grid
          item
          display='flex'
          justifyContent='center'
          alignContent='center'
          textAlign='center'
          direction='column'
          xs={12}
          sm={12}
          lg={4}
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
        <Grid item xs={0} sm={0} xs={4}></Grid>
      </Grid>
    </div>
  );
}
