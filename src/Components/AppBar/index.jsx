import React from 'react';
import styles from './appbar.module.css';
import aclogo from '../../images/Seal_of_Alachua_County_Florida.png';
import { ThemeProvider } from '@mui/styles';

import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  middle: {
    background: theme.palette.darkblue.main,
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
  },
  wrapper: {
    background: theme.palette.darkblue.main,
    height: 'auto',
  },
  logo: {
    width: '60px',
  },
  text: {
    color: 'white',
    alignSelf: 'center',
  },
}));

export default function AppBarGrid() {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.wrapper}>
        <Grid item xs={2} md={4} className={classes.first} lg={1}></Grid>
        <Grid
          item
          display='flex'
          container
          xs={8}
          md={4}
          lg={10}
          // sx={{ justifyContent: { xs: 'center', lg: 'left' } }}
          className={classes.middle}
        >
          <Grid item direction='row'>
            <img className={classes.logo} src={aclogo} alt='' />
          </Grid>
          <Grid item direction='row' alignSelf='center'>
            <Typography p={1} className={classes.text} variant='h5'>
              Alachua County
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={2} md={4} lg={1} className={classes.last}></Grid>
      </Grid>
    </div>
  );
}
