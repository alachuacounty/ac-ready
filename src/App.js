import { useContext } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';

import theme from './components/siteTheme';
import { incidentsContext } from './contexts/IncidentsContext';

import Appbar from './components/Branding/Appbar';
import Home from './pages/Home';
import Incidents from './pages/Incidents';
import NotFound from './pages/NotFound';

export default function App() {
  const incidents = useContext(incidentsContext);

  return (
    <ThemeProvider theme={theme}>
      <Appbar>
        <Routes>
          <Route path='/' element={<Home />} />

          {incidents.length > 0 && (
            <>
              <Route path='incidents' element={<Incidents />} />
              {incidents[0].routes.map((route) => {
                return <Route path={route.path} element={route.element} />;
              })}
            </>
          )}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Appbar>
    </ThemeProvider>
  );
}
