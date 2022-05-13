import { Grid, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import IncidentLayout from '../components/Branding/IncidentLayout';
import { titleContext } from '../contexts/TitleContext';
import EmergencyOrdersTable from '../components/Tables/EmergencyOrders';

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

export default function EmergencyOrder() {
  const { updatePageTitle, updatePageHeading } = useContext(titleContext);
  const [emergencyOrders, setEmergencyOrders] = useState([]);

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
    updatePageTitle('Elsa | Emergency Orders');
    updatePageHeading('Hurricane Elsa');
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
