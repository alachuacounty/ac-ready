import { ThemeProvider } from '@mui/material/styles';

import theme from '../src/styles/siteTheme';
import MainPage from './pages/Main/main.js';
import ShelterPage from './pages/Shelter/shelter.js';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import React from 'react';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/Shelter' element={<ShelterPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
