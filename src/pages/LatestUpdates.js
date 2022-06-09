/* eslint-disable react-hooks/exhaustive-deps */
import { Grid, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';

import IncidentLayout from '../components/Branding/IncidentLayout';
import PressItem from '../components/PressReleases/PressItem';
import { incidentsContext } from '../contexts/IncidentsContext';
import { titleContext } from '../contexts/TitleContext';
import { breadCrumbsContext } from '../contexts/BreadCrumbsContext';

export default function LatestUpdates({ incidentIndex }) {
  const { updatePageTitle, updatePageHeading } = useContext(titleContext);
  const { pushBreadCrumbs } = useContext(breadCrumbsContext);
  const { incidents } = useContext(incidentsContext);

  const [latestUpdates, setLatestUpdates] = useState([]);

  useEffect(() => {
    if (incidents && incidents.length && incidents[0].updates)
      setLatestUpdates(incidents[incidentIndex].updates);
    updatePageTitle(`${incidents[incidentIndex].name} | Latest Updates`);
    updatePageHeading(incidents[incidentIndex].name);
  }, [incidents]);

  useEffect(() => {
    pushBreadCrumbs({
      crumb: incidents[incidentIndex].name,
      link: `/incidents/${incidents[incidentIndex].urlName}/`,
    });
  }, []);

  return (
    <IncidentLayout title='Latest Updates'>
      <Grid container xs={12} paddingBottom={6} justifyContent='flex-start'>
        {latestUpdates && latestUpdates.length > 0 ? (
          latestUpdates.map((data, index) => (
            <PressItem data={data} expanded={true} index={index} />
          ))
        ) : (
          <Typography variant='h6'>No Latest Updates</Typography>
        )}
      </Grid>
    </IncidentLayout>
  );
}
