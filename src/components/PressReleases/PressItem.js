import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import clsx from 'clsx';
import DateCircle from './DateCircle';
import ACRButton from '../ACRButton';

import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  avatar: {
    height: '70px',
    width: '70px',
    background: theme.palette.lightblue.light,
  },
  text: {
    color: theme.palette.darkblue.main,
  },
  timeByline: {
    fontWeight: 'bold',
    fontSize: '16px !important',
  },
  title: {
    color: theme.palette.middleblue.main,
  },
  clipped: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    height: '100px',
    lineClamp: '4',
  },
  padded: {
    height: '150px',
    [theme.breakpoints.down('md')]: {
      height: 'auto',
    },
  },
}));

export default function PressItem({ data, expanded, index, latestUpdates }) {
  const classes = useStyles();
  return (
    <Grid container spacing={2} xs={12} key={index}>
      <Grid item container spacing={0} xs={2} justifyContent='flex-end'>
        <DateCircle day={data.day} date={data.date} year={data.year} />
      </Grid>

      <Grid item container spacing={0} xs={10} marginBottom={3}>
        <Grid item container xs={12}>
          <Typography
            component='span'
            className={clsx(classes.text, classes.timeByline)}
          >
            {' '}
            {data.time}{' '}
          </Typography>
        </Grid>
        <Grid item container xs={12}>
          <Typography component='h3' variant='h5' className={classes.title}>
            {expanded ? (
              data.title
            ) : (
              <Link to={data.link} title={data.title} className={classes.title}>
                {' '}
                {data.title}{' '}
              </Link>
            )}
          </Typography>
        </Grid>
        {expanded && (
          <>
            {data.desc && (
              <Grid item xs={12}>
                <Typography
                  paragraph
                  className={clsx(classes.text, classes.clipped)}
                >
                  {data.desc}
                </Typography>
              </Grid>
            )}
            {data.updateContent && (
              <Grid
                item
                paddingBottom={2}
                paddingTop={data.desc ? 0 : 2}
                xs={12}
              >
                <ACRButton text='Read More' link={data.link} size='small' />
              </Grid>
            )}
          </>
        )}
        {expanded && !data.desc && latestUpdates && (
          <Grid item xs={12} className={classes.padded}></Grid>
        )}
      </Grid>
    </Grid>
  );
}
