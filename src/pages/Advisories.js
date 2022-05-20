/* eslint-disable react-hooks/exhaustive-deps */
import { Grid, Typography } from '@mui/material';
import moment from 'moment';
import React, { useContext, useEffect, useState } from 'react';

import IncidentLayout from '../components/Branding/IncidentLayout';
import PressItem from '../components/PressReleases/PressItem';
import { incidentsContext } from '../contexts/IncidentsContext';
import { titleContext } from '../contexts/TitleContext';

export default function Advisories() {
  const { updatePageTitle, updatePageHeading } = useContext(titleContext);
  const incidents = useContext(incidentsContext);

  const [advisories, setAdvisories] = useState([]);

  useEffect(() => {
    if (
      incidents &&
      incidents.length &&
      incidents[0].advisories &&
      incidents[0].advisories.length > 0
    ) {
      const tempAdvisories = [];
      incidents[0].advisories.forEach((advisory) => {
        const tempAdvisory = {};
        tempAdvisory.day = moment(advisory.AdvisoryDateTime).format('ddd');
        tempAdvisory.date = moment(advisory.AdvisoryDateTime).format('MMM Do');
        tempAdvisory.year = moment(advisory.AdvisoryDateTime).format('YYYY');
        tempAdvisory.time = moment(advisory.AdvisoryDateTime).format('H:mm A');
        tempAdvisory.title = advisory.AdvisoryName;
        tempAdvisory.desc = advisory.Blurb;
        tempAdvisory.link = `advisories/${advisory.MondayID}`;
        tempAdvisories.push(tempAdvisory);
      });
      setAdvisories(tempAdvisories);
    }
    updatePageTitle('Elsa | Advisories');
    updatePageHeading('Hurricane Elsa');
  }, [incidents]);

  return (
    <IncidentLayout title='Latest Updates'>
      <Grid container xs={12} paddingBottom={6} justifyContent='flex-start'>
        {advisories && advisories.length > 0 ? (
          advisories.map((data, index) => (
            <PressItem data={data} expanded={true} index={index} />
          ))
        ) : (
          <Typography variant='h6'>No Latest Updates</Typography>
        )}
      </Grid>
    </IncidentLayout>
  );
}
