import { useContext } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';

import theme from './components/siteTheme';
import { incidentsContext } from './contexts/IncidentsContext';

import Appbar from './components/Branding/Appbar';
import Home from './pages/Home';
import FAQ from './pages/Faq';
import ImportantLinksPage from './pages/ImportantLinks';
import SandbagPage from './pages/Sandbag';
import Shelter from './pages/Shelter';
import Incidents from './pages/Incidents';
import NotFound from './pages/NotFound';
import Incident from './pages/Incident';
import IncidentHome from './pages/IncidentHome';
import Advisories from './pages/Advisories';
import EmergencyOrder from './pages/EmergencyOrder';
import RoadClosures from './pages/RoadClosures';
import Advisory from './pages/Advisory';
import ReportDamage from './pages/ReportDamage';

export default function App() {
  const incidents = useContext(incidentsContext);

  return (
    <ThemeProvider theme={theme}>
      <Appbar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/incidents/elsa/emergencyorders'
            element={<EmergencyOrder />}
          />
          <Route path='/incidents/elsa/faqs' element={<FAQ />} />
          <Route
            path='/incidents/elsa/importantlinks'
            element={<ImportantLinksPage />}
          />
          <Route path='/incidents/elsa/sandbags' element={<SandbagPage />} />
          <Route path='/incidents/elsa/shelters' element={<Shelter />} />
          <Route
            path='/incidents/elsa/roadclosures'
            element={<RoadClosures />}
          />
          <Route
            path='/incidents/elsa/reportdamages'
            element={<ReportDamage />}
          />
          <Route path='/incidents/elsa' element={<IncidentHome />} />
          <Route path='/incidents/elsa/advisories' element={<Advisories />} />
          <Route
            path='/incidents/elsa/advisories/:UpdateID'
            element={<Advisory />}
          />
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
