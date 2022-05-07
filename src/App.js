import { ThemeProvider } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';

import theme from '../src/styles/siteTheme';

import Home from './pages/Home';
import ShelterPage from './pages/Shelter/shelter.js';
import Prepare from './pages/Prepare';
import Shelter from './pages/Shelter';
import FAQPage from './pages/Faq';
import SandbagPage from './pages/Sandbag';
import ImportantLinksPage from './pages/ImportantLinks';
import AdvisoryTable from './components/EmergencyOrder/emergency';
import Appbar from './components/Branding/Appbar';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Appbar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='emergencyorders' element={<AdvisoryTable />} />
          <Route path='faq' element={<FAQPage />} />
          <Route path='importantlinks' element={<ImportantLinksPage />} />
          <Route path='prepare' element={<Prepare />} />
          <Route path='sandbags' element={<SandbagPage />} />
          <Route path='shelters' element={<Shelter />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Appbar>
    </ThemeProvider>
  );
}
