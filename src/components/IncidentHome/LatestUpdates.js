import { useState, useEffect, useContext } from 'react';
import { Grid, Typography } from '@mui/material';

import { makeStyles } from '@mui/styles';
import PressItem from '../PressReleases/PressItem';
import { incidentsContext } from '../../contexts/IncidentsContext';

const useStyles = makeStyles((theme) => ({
  title: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
}));

export default function LatestUpdates({ incidentIndex }) {
  const classes = useStyles();
  const incidents = useContext(incidentsContext);

  const [isMobile, setMobile] = useState(window.innerWidth < 601);
  const [advisories, setAdvisories] = useState([]);

  const updateMedia = () => {
    setMobile(window.innerWidth < 601);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });

  useEffect(() => {
    if (
      incidents &&
      incidents.length &&
      incidents[incidentIndex] &&
      incidents[incidentIndex].advisories &&
      incidents[incidentIndex].advisories.length
    )
      setAdvisories(incidents[incidentIndex].advisories);
  }, [incidents, incidentIndex]);

  return (
    <Grid container xs={12} spacing={3} justifyContent='center'>
      <Grid item xs={12} p={5}>
        <Typography variant='h5' textAlign='left' className={classes.title}>
          Latest Updates
        </Typography>
      </Grid>
      {advisories && advisories.length > 0 ? (
        <Grid container xs={12} spacing={4} p={4} justifyContent='center'>
          <Grid container xs={12} md={6} justifyContent='flex-end'>
            <PressItem data={advisories[0]} expanded={!isMobile} index={1} />
          </Grid>
          <Grid container xs={12} md={6} justifyContent='flex-end'>
            {advisories[1] && <PressItem data={advisories[1]} index={2} />}
            {advisories[2] && <PressItem data={advisories[2]} index={3} />}
            {advisories[3] && <PressItem data={advisories[3]} index={4} />}
          </Grid>
        </Grid>
      ) : (
        <Grid item xs={12}>
          <Typography variant='h6'>No Latest Updates</Typography>
        </Grid>
      )}
    </Grid>
  );
}
