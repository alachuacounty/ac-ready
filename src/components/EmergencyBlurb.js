import React from 'react';
import { Box, Paper, Typography } from '@mui/material';

export default function EmergencyBlurb() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 200,
          height: 220,
        },
      }}
    >
      <Paper
        elevation={8}
        sx={{
          backgroundColor: '#D0EDFC!important',
          color: '#12274B!important',
        }}
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
