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
import LeftDrawer from './LeftDrawer';
import TopDrawer from './TopDrawer';
import EmergencyBanner from '../EmergencyBanner';

export default function Appbar({ children }) {
  const { pageTitle } = useContext(titleContext);
  const { incidents } = useContext(incidentsContext);
  const location = useLocation();

  const isHomePage = pageTitle === 'Alachua County Ready | Home';
  const isLocationIncidents =
    location.pathname === '/incidents' || location.pathname === '/incidents/';

  var navItems = [];

  if (!isHomePage && !isLocationIncidents && incidents.length > 0) {
    for (const incident of incidents) {
      if (
        location.pathname.toLowerCase().includes(incident.urlName.toLowerCase())
      ) {
        navItems = incident.pages;
      }
    }
  }

  if (!isHomePage && location && isLocationIncidents) {
    navItems = incidents.map((incident) => ({
      title: incident.name,
      link: incident.urlName,
    }));
  }

  if (isHomePage) {
    navItems = [
      { title: 'Get Notified', link: '#notified' },
      { title: 'Prepare', link: '#prepared' },
      { title: 'ACR Stickers', link: '#sticker' },
      {
        title: 'Incidents',
        link: '/incidents',
        submenu: incidents.map((incident) => ({
          title: incident.name,
          link: `/incidents/${incident.urlName}`,
        })),
      },
    ];
  }

  const drawerAnchor = isHomePage ? (
    <TopDrawer navItems={navItems} />
  ) : (
    <LeftDrawer navItems={navItems} />
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position='static'
          sx={{ backgroundColor: (theme) => theme.palette.darkblue.main }}
        >
          <Toolbar disableGutters>
            <Grid container sx={{ display: 'flex' }}>
              <Grid
                item
                xs={2}
                md={4}
                lg={1}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {drawerAnchor}
              </Grid>
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
                    <img width='75px' src={aclogo} alt='Alachua County Logo' />
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
              {!isHomePage ? <BreadCrumbs /> : null}
              <Header />
              {isHomePage && incidents.length > 0 && (
                <Grid item xs={12}>
                  <EmergencyBanner />
                </Grid>
              )}
              {!isHomePage ? (
                location && isLocationIncidents ? (
                  <ActiveIncidentsNavigation />
                ) : (
                  <IncidentNavigation navItems={navItems} />
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
