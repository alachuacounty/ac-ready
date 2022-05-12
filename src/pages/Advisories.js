import { Typography } from '@mui/material';
import React from 'react';

import IncidentsLayout from '../components/Branding/IncidentsLayout';
import AdvisoriesList from '../components/Advisories/AdvisoriesList';

export default function Advisories() {
    return (
        <IncidentsLayout title='Latest Updates'>
            <AdvisoriesList />
        </IncidentsLayout>
    );
}
