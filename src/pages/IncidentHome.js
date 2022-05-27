import React, { useContext, useEffect } from 'react';
import { Grid, Divider } from '@mui/material';
import { titleContext } from '../contexts/TitleContext';
import { breadCrumbsContext } from '../contexts/BreadCrumbsContext';
import EmergencyBlurb from '../components/EmergencyBlurb';
import HowToPrepare from '../components/IncidentHome/HowToPrepare';
import NHCMaps from '../components/IncidentHome/NHCMaps';
import LatestUpdates from '../components/IncidentHome/LatestUpdates';
import ReportDamage from '../components/IncidentHome/ReportDamage';
import { incidentsContext } from '../contexts/IncidentsContext';

export default function IncidentHome({ incidentIndex }) {
  const incidents = useContext(incidentsContext);
  const { updatePageTitle, updatePageHeading } = useContext(titleContext);
  const { pushBreadCrumbs } = useContext(breadCrumbsContext);

  useEffect(() => {
    updatePageTitle(`${incidents[incidentIndex].name} | Home`);
    updatePageHeading(incidents[incidentIndex].name);
    pushBreadCrumbs({
      crumb: incidents[incidentIndex].name,
      link: `/incidents/${incidents[incidentIndex].urlName}`,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Grid container spacing={0} xs={12} justifyContent='center'>
        <Grid item xs={12} md={10} pt={3} pb={3}>
          <LatestUpdates incidentIndex={incidentIndex} />
          <Divider variant='middle' />
        </Grid>
        <Grid item xs={12} pt={3} pb={3}>
          <EmergencyBlurb fullWidth={true} />
        </Grid>
        <Grid item xs={12} md={10} pt={3} pb={3}>
          <HowToPrepare incidentIndex={incidentIndex} />
        </Grid>
        <Grid item xs={12} pt={3} pb={3}>
          <ReportDamage incidentIndex={incidentIndex} />
        </Grid>
        <Grid item xs={12} md={10} pt={3} pb={9}>
          <NHCMaps incidentIndex={incidentIndex} />
        </Grid>
      </Grid>
    </>
  );
}
