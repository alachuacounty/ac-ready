import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  headerColor: {
    background: '#12264c',
    color: 'white',
  },
  backgroundColor: {
    background: '#4a97d3!important',
    color: '#FFF!important',
  },
  smallPaddingOff: {
    [theme.breakpoints.down('lg')]: {
      paddingRight: '32px',
    },
  },
}));

export default function EmergencyBlurb() {
  const classes = useStyles();
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 220,
          height: 220,
        },
      }}
    >
      <Paper className={classes.backgroundColor}>
        <Typography textAlign='center' p={1} variant='h5'>
          Sign Up for Emergency Alerts
        </Typography>
        <Typography textAlign='center' p={1} varient='p'>
          Text "Alachua to XXXXXXX to receive real-time County updates during a
          large-scale incident or emergency
        </Typography>
      </Paper>
    </Box>
  );
}
