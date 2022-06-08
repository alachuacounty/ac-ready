/* eslint-disable react-hooks/exhaustive-deps */
import { Grid } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import IncidentLayout from '../components/Branding/IncidentLayout';
import { titleContext } from '../contexts/TitleContext';
import EmergencyOrdersTable from '../components/Tables/EmergencyOrders';
import { breadCrumbsContext } from '../contexts/BreadCrumbsContext';
import { incidentsContext } from '../contexts/IncidentsContext';

const headCells = [
  {
    id: 'OrderName',
    label: 'Emergency Order',
  },
  {
    id: 'OrderDateTime',
    label: 'Date',
  },
  {
    id: 'InEffect',
    label: 'In Effect',
  },
];

export default function EmergencyOrder({ incidentIndex }) {
  const { updatePageTitle, updatePageHeading } = useContext(titleContext);
  const { incidents } = useContext(incidentsContext);
  const [emergencyOrders, setEmergencyOrders] = useState([]);
  const { pushBreadCrumbs } = useContext(breadCrumbsContext);

  const getEmergencyOrders = async () => {
    try {
      const result = await axios(
        `https://api.alachuacounty.us/hurricane-next-api/api/getEmergecnyOrdersRecentAdvisories`
      );
      setEmergencyOrders(result.data[0]);
      console.log(result.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEmergencyOrders();
    updatePageTitle(`${incidents[incidentIndex].name} | Emergency Orders`);
    updatePageHeading(incidents[incidentIndex].name);
    pushBreadCrumbs({
      crumb: incidents[incidentIndex].name,
      link: `/incidents/${incidents[incidentIndex].urlName}/`,
    });
  }, []);

  return (
    <IncidentLayout title='Emergency Orders'>
      <Grid container>
        <Grid item xs={12}>
          <EmergencyOrdersTable headCells={headCells} rows={emergencyOrders} />
        </Grid>
      </Grid>
    </IncidentLayout>
  );
}
