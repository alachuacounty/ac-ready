import { Typography } from '@mui/material';

import IncidentsLayout from '../components/Branding/Layouts/IncidentsLayout';
import ImportantLinksComponent from '../components/ImportantLinks/importantlinks';

export default function ImportantLinksPage() {
  return (
    <IncidentsLayout title='Find a Shelter'>
      <Typography>Shelter Content</Typography>
      <ImportantLinksComponent />
    </IncidentsLayout>
  );
}
