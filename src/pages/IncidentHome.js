import React, { useContext, useEffect } from 'react';
import { Grid, Divider } from '@mui/material';
import { titleContext } from '../contexts/TitleContext';
import { breadCrumbsContext } from '../contexts/BreadCrumbsContext';
import HowToPrepare from '../components/IncidentHome/HowToPrepare';
import NHCMaps from '../components/IncidentHome/NHCMaps';
import LatestUpdates from '../components/IncidentHome/LatestUpdates';
import EmergencyBanner from '../components/EmergencyBanner';
import ReportDamage from '../components/IncidentHome/ReportDamage';

export default function IncidentHome() {
  const { updatePageTitle, updatePageHeading } = useContext(titleContext);
  const { pushBreadCrumbs } = useContext(breadCrumbsContext);

  useEffect(() => {
    updatePageTitle('Hurricane Elsa | Home');
    updatePageHeading('Hurricane Elsa');
    pushBreadCrumbs({ crumb: 'Hurricane Elsa', link: '/incidents/elsa' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Grid container spacing={0} xs={12} justifyContent='center'>
        <Grid item xs={12} md={10} pt={3} pb={3}>
          <LatestUpdates />
          <Divider variant='middle' />
        </Grid>
        <Grid item xs={12} md={10} pt={3} pb={3}>
          <HowToPrepare />
        </Grid>
        <Grid item xs={12} pt={3} pb={3}>
          <ReportDamage />
        </Grid>
        <Grid item xs={12} md={10} pt={3} pb={9}>
          <NHCMaps />
        </Grid>
        <Grid item xs={12}>
          <EmergencyBanner />
        </Grid>
      </Grid>
    </>
  );
}
