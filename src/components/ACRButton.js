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
        }}
        variant='contained'
      >
        READ MORE
      </Button>
    </div>
  );
}
