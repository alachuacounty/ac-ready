import React from 'react';
import Button from '@mui/material/Button';

export default function ACRButton() {
  return (
    <div>
      <Button
        sx={{
          bgcolor: '#1B5B98!important',
          borderColor: ' #1968B2!important',
          borderRadius: '10',
          textDecoration: 'underline',
          fontWeight: 'bold',
        }}
        variant='contained'
      >
        READ MORE
      </Button>

      {/*  <Button
        sx={{
          color: '#12274B!important',
          bgcolor: '#D0EDFC!important',
          borderColor: ' #4A97D2!important',
          borderRadius: '10',
          textDecoration: 'underline',
          fontWeight: 'bold',
        }}
        variant='contained'
      >
        READ MORE
      </Button> */}
    </div>
  );
}