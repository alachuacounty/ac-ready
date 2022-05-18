import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
const useStyles = makeStyles((theme) => ({
  boxStyles: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > :not(style)': {
      m: 1,
      width: 200,
      height: 220,
      [theme.breakpoints.down('lg')]: {
        width: '100%',
        height: 'auto',
      },
    },
  },
  paperStyles: {
    backgroundColor: '#D0EDFC!important',
    color: '#12274B!important',
    [theme.breakpoints.down('lg')]: {
      boxShadow: 'none',
      padding: '2%',
    },
  },
  fullWidthBox: {
    '& > :not(style)': { width: '100%', height: 'auto' },
  },
  fullWidthPaper: {
    padding: '2%',
    boxShadow: 'none',
  },
}));

export default function EmergencyBlurb({ fullWidth }) {
  const classes = useStyles();
  return (
    <Box
      className={
        fullWidth
          ? clsx(classes.boxStyles, classes.fullWidthBox)
          : classes.boxStyles
      }
    >
      <Paper
        elevation={8}
        className={
          fullWidth
            ? clsx(classes.paperStyles, classes.fullWidthPaper)
            : classes.paperStyles
        }
      >
        <Typography textAlign='center' p={1} variant='h5'>
          Sign Up for Emergency Alerts
        </Typography>
        <Typography textAlign='center' p={1}>
          Text "Alachua" to XXXXXX to receive real-time County updates during a
          large-scale incident or emergency
        </Typography>
      </Paper>
    </Box>
  );
}
