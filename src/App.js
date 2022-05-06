import { ThemeProvider } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';

import theme from '../src/styles/siteTheme';

import MainPage from './pages/Main/main.js';
import Home from './pages/Home';
import ShelterPage from './pages/Shelter/shelter.js';
import Prepare from './pages/Prepare';
import Shelter from './pages/Shelter';
import FAQPage from './pages/Faq';
import SandbagPage from './pages/Sandbag';
import ImportantLinksPage from './pages/ImportantLinks';
import AdvisoryTable from './components/EmergencyOrder/emergency';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='newPage' element={<Home />} />
        <Route path='prepare' element={<Prepare />} />
        <Route path='shelters' element={<Shelter />} />
        <Route path='sandbags' element={<SandbagPage />} />
        <Route path='faq' element={<FAQPage />} />
        <Route path='importantlinks' element={<ImportantLinksPage />} />
        <Route path='emergencyorders' element={<AdvisoryTable />} />
      </Routes>
    </ThemeProvider>
  );
}
