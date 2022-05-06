import { Grid } from '@mui/material';
import React from 'react';

import EmergencyBlurb from '../../EmergencyBlurb';

export default function IncidentsLayout({ children, title = 'Page Title' }) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        {title}
      </Grid>
      <Grid item xs={9}>
        {children}
      </Grid>
      <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'center' }}>
        <EmergencyBlurb />
      </Grid>
    </Grid>
  );
}
