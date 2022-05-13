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
import DrawerNavigation from './DrawerNavigation';


var navItems = [
  { title: 'Hurricane Home', link: '/' },
  {
    title: 'Prepare',
    link: '/prepare',
    submenu: [
      { title: 'Shelters', link: '/shelters' },
      { title: 'Sandbag Locations', link: '/sandbags' },
      { title: 'FAQs', link: '/faqs' },
    ],
  },
  {
    title: 'Updates',
    link: '/updates',
    submenu: [
      { title: 'Advisories', link: '/advisories' },
      { title: 'Road Closures', link: '/roadclosures' },
    ],
  },
  { title: 'Important Links', link: '/importantlinks' },
  { title: 'Emergency Orders', link: '/emergencyorders' },
];

export default function Appbar({ children }) {
  const { pageTitle, pageHeading } = useContext(titleContext);
  const incidents = useContext(incidentsContext);
  const location = useLocation();

  if (pageTitle !== 'Alachua County Ready | Home'
    && location
    && (location.pathname === '/incidents' || location.pathname === '/incidents/')) {
    navItems = incidents.map((incident) => ({ title: incident.name, link: incident.urlName }))
  }

  if (pageTitle === 'Alachua County Ready | Home') {

    navItems = [
      { title: 'Get Notified', link: '/' },
      { title: 'Prepare', link: '/', },
      { title: 'ACR Stickers', link: '/', },
      {
        title: 'Incidents', link: '/incidents',
        submenu: [
          { title: 'Hurricane Elsa', link: '/incidents/elsa' },
        ],
      },
    ];

  }

  const drawerTopAnchor = (pageTitle === 'Alachua County Ready | Home') ? true : false;

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position='static'
          sx={{ backgroundColor: (theme) => theme.palette.darkblue.main }}
        >
          <Toolbar disableGutters>
            <Grid container sx={{ display: 'flex' }}>
              <Grid item xs={2} md={4} lg={1} sx={{ display: 'flex', alignItems: 'center' }}>
                <DrawerNavigation navItems={navItems} top={drawerTopAnchor} ></DrawerNavigation>
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
                location &&
                  (location.pathname === '/incidents' ||
                    location.pathname === '/incidents/') ? (
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
