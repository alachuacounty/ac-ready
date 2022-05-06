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
          width: 220,
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
        <Typography textAlign='center' p={1} varient='p'>
          Text "Alachua to XXXXXXX to receive real-time County updates during a
          large-scale incident or emergency
        </Typography>
      </Paper>
    </Box>
  );
}
