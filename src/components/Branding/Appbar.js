import {
  AppBar,
  Box,
  Container,
  Grid,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';

import aclogo from '../../images/Seal_of_Alachua_County_Florida.png';

export default function Appbar({ children }) {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position='static'
          sx={{ backgroundColor: (theme) => theme.palette.darkblue.main }}
        >
          <Toolbar disableGutters>
            <Grid container sx={{ display: 'flex' }}>
              <Grid item xs={2} md={4} lg={1}></Grid>
              <Grid item xs={2} md={4} lg={1} sx={{ textAlign: 'end' }}>
                <img width='60px' src={aclogo} alt='Alachua County Logo' />
              </Grid>
              <Grid item xs={8} sx={{ alignSelf: 'center' }}>
                <Typography p={1} variant='h5'>
                  Alachua County
                </Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
      <Container maxWidth='md' sx={{ p: 3 }}>
        <Box sx={{ my: 2 }}>{children}</Box>
      </Container>
    </>
  );
}
