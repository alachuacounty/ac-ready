import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
const useStyles = makeStyles((theme) => ({
  boxStyles: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      height: 'auto',
    },
    '& > :not(style)': {
      margin: '1rem',
      width: 200,
      height: 220,
      [theme.breakpoints.down('md')]: {
        width: '100%',
        height: 'auto',
        margin: '0',
      },
    },
  },
  paperStyles: {
    backgroundColor: '#D0EDFC!important',
    color: '#12274B!important',
    [theme.breakpoints.down('md')]: {
      boxShadow: 'none',
      padding: '2%',
    },
  },
  fullWidthBox: {
    '& > :not(style)': { width: '100%', height: 'auto', margin: '0', },
  },
  fullWidthPaper: {
    padding: '2%',
    boxShadow: 'none',
  },
  removePadding: {
    paddingBottom: '0px !important',
  }
}));

export default function EmergencyBlurb({ title, text, fullWidth, removePadding }) {
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
            ? clsx(classes.paperStyles, classes.fullWidthPaper, removePadding ? classes.removePadding : null)
            : clsx(classes.paperStyles, removePadding ? classes.removePadding : null)
        }
      >
        <Typography textAlign='center' p={1} variant='h5' fontWeight='bold'>
          {title}
        </Typography>
        <Typography textAlign='center' p={1} fontWeight='bold'>
          {text}
        </Typography>
      </Paper>
    </Box>
  );
}
