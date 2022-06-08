import React, { useContext } from 'react';
import theme from '../siteTheme';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import { breadCrumbsContext } from '../../contexts/BreadCrumbsContext';
import { Link } from 'react-router-dom';

export default function BreadCrumbs() {
  const { breadCrumbs } = useContext(breadCrumbsContext);

  const breadCrumbsTrail = breadCrumbs; //[{ crumb: 'ALACHUA COUNTY READY HOME', link: '/' }, { crumb: 'INCIDENTS', link: '/incidents' }, { crumb: 'PAGE', link: '' }];
  const lastIndex = breadCrumbsTrail.length - 1;

  const breadcrumbs = breadCrumbsTrail.map((breadcrumb, index) => (
    <Link
      underline='hover'
      key={index}
      color={theme.middleblue}
      to={breadcrumb.link}
      sx={{ fontWeight: 'bold', textTransform: 'Uppercase !important' }}
    >
      {breadcrumb.crumb}
    </Link>
  ));

  breadcrumbs.pop();
  breadcrumbs.push(
    <Typography
      key='3'
      color={theme.grey}
      sx={{ fontWeight: 'bold', textTransform: 'Uppercase !important' }}
    >
      {breadCrumbsTrail[lastIndex].crumb}
    </Typography>
  );

  return (
    <Grid
      container
      sx={{
        justifyContent: { xs: 'center' },
        height: 'auto',
      }}
    >
      <Grid item xs={0} lg={3}></Grid>
      <Grid
        item
        xs={12}
        lg={10}
        sx={{
          textAlign: { xs: 'center', sm: 'start' },
          p: 2,
          display: { xs: 'none', lg: 'block' },
        }}
      >
        <Stack spacing={2}>
          <Breadcrumbs
            separator={
              <NavigateNextIcon
                fontSize='small'
                sx={{
                  fontWeight: 'bold',
                  paddingLeft: '20px',
                  paddingRight: '20px',
                }}
              />
            }
            aria-label='breadcrumb'
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </Grid>
    </Grid>
  );
}
