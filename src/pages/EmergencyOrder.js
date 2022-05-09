import { Typography } from '@mui/material';
import React from 'react';

import IncidentsLayout from '../components/Branding/IncidentsLayout';
import AdvisoryTable from '../components/EmergencyOrder/emergency';
export default function EmergencyOrderPage() {
  return (
    <IncidentsLayout title='Find a Shelter'>
      <Typography>Shelter Content</Typography>
      <AdvisoryTable />
    </IncidentsLayout>
  );
}
