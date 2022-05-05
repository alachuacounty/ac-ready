import * as React from 'react';
import EmergencyBlurb from '../../util/Emergency';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({}));

export default function ShelterPage() {
  const classes = useStyles();
  return <EmergencyBlurb />;
}
