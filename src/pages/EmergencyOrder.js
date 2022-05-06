import { Typography } from '@mui/material';
import React from 'react';

import Appbar from '../components/Branding/Appbar';
import IncidentsLayout from '../components/Branding/Layouts/IncidentsLayout';
import AdvisoryTable from '../components/EmergencyOrder/emergency';
export default function EmergencyOrderPage() {
  return (
    <Appbar>
      <IncidentsLayout title='Find a Shelter'>
        <Typography>Shelter Content</Typography>
        <AdvisoryTable />
      </IncidentsLayout>
    </Appbar>
  );
}
