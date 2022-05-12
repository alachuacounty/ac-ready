import { useContext } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';

import theme from './components/siteTheme';
import { incidentsContext } from './contexts/IncidentsContext';

import Appbar from './components/Branding/Appbar';
import Home from './pages/Home';
import AdvisoryTable from './components/EmergencyOrder/emergency';
import FAQPage from './pages/Faq';
import ImportantLinksPage from './pages/ImportantLinks';
import Prepare from './pages/Prepare';
import SandbagPage from './pages/Sandbag';
import Shelter from './pages/Shelter';
import Incidents from './pages/Incidents';
import NotFound from './pages/NotFound';
import ShelterPage from './pages/Shelter/shelter.js';
import Incident from './pages/Incident';
import IncidentHome from './pages/IncidentHome';
import Advisories from './pages/Advisories';

export default function App() {
  const incidents = useContext(incidentsContext);

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
          <Route path='/incidents/elsa' element={<IncidentHome />} />
          <Route path='advisories' element={<Advisories />} />
          {incidents.length > 0 && (
            <>
              <Route path='incidents' element={<Incidents />} />
              {incidents.map((incident) => (
                <Route
                  path={`incidents/${incident.urlName}`}
                  element={
                    <Incident name={incident.name} pages={incident.pages} />
                  }
                />
              ))}
            </>
          )}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Appbar>
    </ThemeProvider>
  );
}
