import { AppBar, Grid, Link, List, ListItem, Toolbar } from '@mui/material';
import React, { useContext } from 'react';

import useStyles from './IncidentNavigationStyles';
import { incidentsContext } from '../../contexts/IncidentsContext';

export default function ActiveIncidentsNavigation() {
  const classes = useStyles();
  const incidents = useContext(incidentsContext);

  return (
    <AppBar position='absolute' className={classes.appBar}>
      <Toolbar variant='dense'>
        <List className={classes.gridList}>
          <ListItem className={classes.navItem} key={0}>
            <Link
              href={'/'}
              color='inherit'
              title={'Alachua County Ready | Home'}
            >
              Alachua County Ready | Home
            </Link>
          </ListItem>
          {incidents &&
            incidents.length > 0 &&
            incidents.map((incident) => (
              <ListItem className={classes.navItem} key={0}>
                <Link
                  href={incident.urlName}
                  color='inherit'
                  title={incident.name}
                >
                  {incident.name}
                </Link>
              </ListItem>
            ))}
        </List>
      </Toolbar>
    </AppBar>
  );
}
