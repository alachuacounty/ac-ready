import React, { useContext, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { titleContext } from '../contexts/TitleContext';
import { breadCrumbsContext } from '../contexts/BreadCrumbsContext';
import NHCMaps from '../components/IncidentHome/NHCMaps';
import LatestUpdates from '../components/IncidentHome/LatestUpdates';
import ACRButton from '../components/ACRButton';
import ReportDamage from '../components/IncidentHome/ReportDamage';

export default function IncidentHome() {
  const { pageTitle, updatePageTitle, updatePageHeading } =
    useContext(titleContext);
  const { breadCrumbs, pushBreadCrumbs } = useContext(breadCrumbsContext);

  useEffect(() => {
    updatePageTitle('Hurricane Elsa | Home');
    updatePageHeading('Hurricane Elsa');
  }, []);

  return (
    <>
      <Grid container xs={12} justifyContent='center'>
        <Grid item xs={10} pt={3} pb={3}>
          <LatestUpdates />
        </Grid>
        <Grid item xs={12} sm={12} pt={3} pb={3}>
          <ReportDamage />
        </Grid>
        <Grid item xs={10} pt={3} pb={9}>
          <NHCMaps />
        </Grid>
      </Grid>
    </>
  );
}
