import { useState, useContext, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';

import theme from './components/siteTheme';
import { incidentsContext } from './contexts/IncidentsContext'

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
  //const [IncidentsFetched, setIncidentsFecthed] = useState(false);
  //const incidents = incidentsContext();

  console.log("check context");
  console.log(incidents);

  /*useEffect(() => {
    console.log("ran useffect on app");
    console.log(incidents.length)
    if (incidents.length > 0) {
      setIncidentsFecthed(true);
      console.log("fetched");
    }
  }, [incidents]);*/

  return (
    <ThemeProvider theme={theme}>
      <Appbar>

        <Routes>
          <Route path='/' element={<Home />} />


          {incidents.length > 0 && (
            <>
              <Route path='incidents' element={<Incidents />} />
              {incidents.map((incident) => (
                <>
                  {/* 
                    <Route
                    path={`incidents/${incident.urlName}`}
                    element={
                      <Incident name={incident.name} pages={incident.pages} />
                    }
                  />
                  */}

                  <Route
                    path={'/incidents/' + incident.urlName + '/emergencyorders'}
                    element={<EmergencyOrder />}
                  />

                  <Route
                    path={'/incidents/' + incident.urlName + '/faqs'}
                    element={<FAQ />}
                  />

                  <Route
                    path={'/incidents/' + incident.urlName + '/importantlinks'}
                    element={<ImportantLinksPage />}
                  />

                  <Route
                    path={'/incidents/' + incident.urlName + '/sandbags'}
                    element={<SandbagPage />}
                  />
                  <Route
                    path={'/incidents/' + incident.urlName + '/shelters'}
                    element={<Shelter />}
                  />
                  <Route
                    path={'/incidents/' + incident.urlName + '/roadclosures'}
                    element={<RoadClosures />}
                  />
                  <Route
                    path={'/incidents/' + incident.urlName + '/reportdamages'}
                    element={<ReportDamage />}
                  />
                  <Route
                    path={'/incidents/' + incident.urlName}
                    element={<IncidentHome />}
                  />
                  <Route
                    path={'/incidents/' + incident.urlName + '/advisories'}
                    element={<Advisories />}
                  />
                  <Route
                    path={'/incidents/' + incident.urlName + '/advisories/:UpdateID'}
                    element={<Advisory />}
                  />
                </>
              ))}
            </>
          )}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Appbar>
    </ThemeProvider>
  );
}
