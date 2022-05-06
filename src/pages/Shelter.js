import { Typography } from '@material-ui/core';
import React from 'react';
import Appbar from '../components/Branding/Appbar';
import IncidentsLayout from '../util/IncidentsLayout';

export default function Shelter() {
  return (
    <Appbar>
      <IncidentsLayout title='Find a Shelter'>
        <Typography>Shelter Content</Typography>
      </IncidentsLayout>
    </Appbar>
  );
}
