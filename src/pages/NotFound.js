/* eslint-disable react-hooks/exhaustive-deps */
import { Grid, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react';

import { titleContext } from '../contexts/TitleContext';

export default function NotFound() {
  const { updatePageTitle } = useContext(titleContext);

  useEffect(() => {
    updatePageTitle('Page Not Found');
  }, []);

  return (
    <Grid
      container
      sx={{ p: 2, height: { xs: '84vh', md: '90vh', lg: '88vh' } }}
    >
      <Grid item xs={12} sx={{ pt: 3 }}>
        <Typography variant='h3' sx={{ pb: 3 }}>
          Page Not Found
        </Typography>
        <Typography variant='h5' sx={{ pb: 1 }}>
          We apologize, but the page or resource you requested could not be
          found.
        </Typography>
        <Typography variant='h6'>
          The page or resource you requested may not exist, may have been moved
          or the address was entered incorrectly.
        </Typography>
      </Grid>
    </Grid>
  );
}
