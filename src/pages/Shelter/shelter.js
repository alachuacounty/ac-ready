import * as React from 'react';
import EmergencyBlurb from '../../components/EmergencyBlurb';
import ShelterMapandTable from '../../components/Shelter/sheltermapandtable.js';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({}));

export default function ShelterPage() {
  const classes = useStyles();
  return (
    <div>
      <ShelterMapandTable />
      <EmergencyBlurb />
    </div>
  );
}
