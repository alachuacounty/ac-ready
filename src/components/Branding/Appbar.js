import { AppBar, Box, Grid, Toolbar, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';

import { incidentsContext } from '../../contexts/IncidentsContext';
import { titleContext } from '../../contexts/TitleContext';

import aclogo from '../../images/Seal_of_Alachua_County_Florida.png';
import Footer from './Footer';
import ActiveIncidentsNavigation from './ActiveIncidentsNavigation';
import Header from './Header';
import BreadCrumbs from './BreadCrumbs';
import IncidentNavigation from './IncidentNavigation';

export default function Appbar({ children }) {
  const { pageTitle, pageHeading } = useContext(titleContext);
  const incidents = useContext(incidentsContext);
  const location = useLocation();

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
              <Grid
                item
                xs={8}
                md={4}
                lg={10}
                sx={{
                  display: 'flex',
                }}
              >
                <Grid
                  container
                  sx={{ justifyContent: { xs: 'center', lg: 'start' } }}
                >
                  <Grid item sx={{ textAlign: 'end' }}>
                    <img width='60px' src={aclogo} alt='Alachua County Logo' />
                  </Grid>
                  <Grid item sx={{ alignSelf: 'center' }}>
                    <Typography p={1} variant='h5'>
                      Alachua County
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={2} md={4} lg={1}></Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
      <Grid container sx={{ my: 2 }}>
        <Grid item xs={12}>
          {pageTitle === 'Page Not Found' ? null : (
            <>
              {pageTitle !== 'Alachua County Ready | Home' ? (
                <BreadCrumbs />
              ) : null}
              <Header />
              {pageTitle !== 'Alachua County Ready | Home' ? (
                location && location.pathname === '/incidents' ? (
                  <ActiveIncidentsNavigation />
                ) : (
                  <IncidentNavigation />
                )
              ) : null}
              {/*   {pageHeading !== 'Home' && incidents && incidents.length > 0 && (
               
              )} */}
            </>
          )}
          {children}
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}
