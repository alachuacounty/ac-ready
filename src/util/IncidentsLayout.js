import { Grid } from '@material-ui/core';
import React from 'react';
import EmergencyBlurb from '../components/EmergencyBlurb';

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
