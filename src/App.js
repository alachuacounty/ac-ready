import { useContext, useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

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
import Modal from './components/Modal';

export default function App() {
  const incidents = useContext(incidentsContext);

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    /*  handleOpen(); */
  }, []);

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
      <Modal handleClose={handleClose} open={open} />
    </ThemeProvider>
  );
}
