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
  const { incidents } = useContext(incidentsContext);

  const [isMobile, setMobile] = useState(window.innerWidth < 601);
  const [latestUpdates, setLatestUpdates] = useState([]);

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
      incidents[incidentIndex].updates &&
      incidents[incidentIndex].updates.length
    )
      setLatestUpdates(incidents[incidentIndex].updates);
  }, [incidents, incidentIndex]);

  return (
    <Grid container xs={12} spacing={3} justifyContent='center'>
      <Grid item xs={12} p={5}>
        <Typography variant='h5' textAlign='left' className={classes.title}>
          Latest Updates
        </Typography>
      </Grid>
      {latestUpdates && latestUpdates.length > 0 ? (
        <Grid container xs={12} spacing={4} p={4} justifyContent='center'>
          <Grid container xs={12} md={6} justifyContent='flex-end'>
            <PressItem
              data={latestUpdates[0]}
              expanded={!isMobile}
              index={1}
              latestUpdates={true}
            />
          </Grid>
          <Grid container xs={12} md={6} justifyContent='flex-end'>
            {latestUpdates[1] && (
              <PressItem data={latestUpdates[1]} index={2} />
            )}
            {latestUpdates[2] && (
              <PressItem data={latestUpdates[2]} index={3} />
            )}
            {latestUpdates[3] && (
              <PressItem data={latestUpdates[3]} index={4} />
            )}
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
