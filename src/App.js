import { ThemeProvider } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';

import theme from '../src/styles/siteTheme';

import MainPage from './pages/Main/main.js';
import Home from './pages/Home';
import ShelterPage from './pages/Shelter/shelter.js';
import Prepare from './pages/Prepare';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='newPage' element={<Home />} />
        <Route path='prepare' element={<Prepare />} />
        <Route path='shelter' element={<ShelterPage />} />
      </Routes>
    </ThemeProvider>
  );
}
