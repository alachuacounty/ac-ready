import React from 'react';

import acr_logo from '../../images/ACR_logo.png';
import { Grid, Typography, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  wrapper: {
    height: 'auto',
    boxShadow:
      '0 5px 5px rgba(18, 38, 76, 0.15), 0 5px 5px rgba(18, 38, 76, 0.15)',
  },
  left: {
    background: 'green',
  },
  logoImg: {
    maxHeight: '100px',
    maxWidth: '100px',
  },
  links: {},

  right: {},
  link: {
    textTransform: 'uppercase',
    fontSize: '1.5em',
  },
});

export default function NavBarGrid() {
  const classes = useStyles();
  return (
    <div>
      <Grid
        container
        xs={12}
        className={classes.wrapper}
        sx={{ justifyContent: { xs: 'center' } }}
      >
        <Grid item className={classes.right} xs={0} lg={1}></Grid>
        <Grid
          item
          className={classes.logo}
          direction='column'
          display='flex'
          alignSelf='center'
          p={2}
          xs={12 && `textAlign='center'`}
          lg={3}
        >
          <img
            className={classes.logoImg}
            src={acr_logo}
            alt='Alachua County ready logo'
          />
        </Grid>
        <Grid item className={classes.right} xs={0} lg={3}></Grid>
        <Grid
          item
          container
          display='flex'
          justifyContent='space-evenly'
          alignContent='center'
          direction='row'
          sx={{ padding: { xs: '3%' } }}
          className={classes.links}
          xs={12}
          lg={4}
        >
          <Link className={classes.link} href='#notified'>
            get notified
          </Link>
          <Link className={classes.link} href='#prepared'>
            prepare
          </Link>

          <Link className={classes.link} href='#sticker'>
            acr stickers
          </Link>
        </Grid>
        <Grid item className={classes.right} xs={0} lg={1}></Grid>
      </Grid>
    </div>
  );
}
