import React from 'react';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import image8 from '../../images/Image8.png';
import Table from '../LocationTable/index';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  wrapper: {
    height: 'auto',
  },
  content: {
    textAlign: 'center',
  },
});

export default function StickerGrid() {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.wrapper}>
        <Grid item xs={0} lg={2}></Grid>
        <Grid item container justify='center' display='grid' lg={8}>
          <Grid justifySelf='center' item lg={12}>
            <Typography
              textAlign='center'
              p={4}
              className={classes.content}
              variant='h4'
            >
              GET YOUR ACR STICKER
            </Typography>
          </Grid>
          <Grid item justifySelf='center' lg={12}>
            <img src={image8} alt='' />
          </Grid>
          <Grid item justifySelf='center' p={2} lg={12}>
            <Typography
              textAlign='center'
              className={classes.content}
              variant='p'
            >
              You can pick up your own ACR bumper sticker for free from the
              following locations:
            </Typography>
          </Grid>
          <Grid item justify='center' width='100%' p={2} lg={12}>
            <Table />
          </Grid>
        </Grid>
        <Grid item xs={0} lg={2}></Grid>
      </Grid>
    </div>
  );
}
