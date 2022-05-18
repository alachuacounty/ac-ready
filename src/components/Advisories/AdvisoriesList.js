import { Grid } from '@mui/material';

import PressItem from '../PressReleases/PressItem';

const mockpressdata = {
  day: 'Fri',
  date: 'Jul 21',
  year: '2022',
  time: '9:00 AM',
  title: 'Lastest Road closures and Openings ',
  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  link: '/',
};

const pressReleaseList = [
  mockpressdata,
  mockpressdata,
  mockpressdata,
  mockpressdata,
  mockpressdata,
];

export default function AdvisoriesList() {
  return (
    <Grid container xs={12} paddingBottom={6} justifyContent='flex-start'>
      {pressReleaseList.map((data, index) => (
        <PressItem data={data} expanded={true} />
      ))}
    </Grid>
  );
}
