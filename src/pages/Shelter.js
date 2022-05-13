import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import IncidentLayout from '../components/Branding/IncidentLayout';
import ShelterMapandTable from '../components/Shelter/sheltermapandtable';
import SheltersTable from '../components/Tables/Shelters';

const headCells = [
  //   {
  //     id: 'pos',
  //     numeric: false,
  //     disablePadding: true,
  //     label: 'Show on Map',
  //   },
  {
    id: 'label',
    label: 'Shelter Name',
  },
  {
    id: 'capacity',
    label: 'Total Capacity',
  },
  {
    id: 'availability',
    label: 'Availability',
  },
  {
    id: 'pet_friendly',
    label: 'Pet Friendly',
  },
  {
    id: 'functional_needs',
    label: 'Special Needs',
  },
];

export default function Shelter() {
  const [shelterData, setShelterData] = useState([]);
  const getShelterData = async () => {
    try {
      const result = await axios.get(
        `https://api.alachuacounty.us/hurricane-next-api/apidev/getShelterData`
      );
      console.log(result.data);
      setShelterData(
        result.data.filter((shelter) => shelter.status === 'OPEN')
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getShelterData();
  }, []);

  return (
    <IncidentLayout title='Find a Shelter'>
      <Typography>Shelter Map</Typography>
      <SheltersTable headCells={headCells} rows={shelterData} />
    </IncidentLayout>
  );
}
