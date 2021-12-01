import React from 'react';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';

export default function NotifyGrid() {
  return (
    <div>
      <Grid container>
        <Grid item lg={12}>
          <Typography variant='h2'>This is a test</Typography>
        </Grid>
      </Grid>
    </div>
  );
}
