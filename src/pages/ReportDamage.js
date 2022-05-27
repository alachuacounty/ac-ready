/* eslint-disable react-hooks/exhaustive-deps */
import { Grid } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import IncidentLayout from '../components/Branding/IncidentLayout';
import { titleContext } from '../contexts/TitleContext';
import { breadCrumbsContext } from '../contexts/BreadCrumbsContext';
import { incidentsContext } from '../contexts/IncidentsContext';

export default function ReportDamage({ incidentIndex }) {
  const { updatePageTitle, updatePageHeading } = useContext(titleContext);
  const { pushBreadCrumbs } = useContext(breadCrumbsContext);
  const incidents = useContext(incidentsContext);

  useEffect(() => {
    updatePageTitle(`${incidents[incidentIndex].name} | Report Damages`);
    updatePageHeading(incidents[incidentIndex].name);
    pushBreadCrumbs({
      crumb: incidents[incidentIndex].name,
      link: `/incidents/${incidents[incidentIndex].name}/`,
    });
  }, []);

  const getIframeSRC = () => {

    var urlElements = incidents[incidentIndex].damageReportURL.split('/');
    urlElements.splice(urlElements.length - 1, 0, "embed");
    return urlElements.join("/");

  }

  return (
    <IncidentLayout title='Report Damage'>
      <Grid container>
        <Grid item xs={12}>
          <iframe
            title='reportDamageForm'
            src={getIframeSRC()}
            width='100%'
            height='900'
            style={{
              border: 0,
              boxShadow: '5px 5px 56px 0px rgba(0,0,0,0.25)',
            }}
          ></iframe>
        </Grid>
      </Grid>
    </IncidentLayout>
  );
}
