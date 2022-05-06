import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import MainPage from './pages/Main/main.js';
import ShelterPage from './pages/Shelter/shelter.js';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const theme = createTheme({
  palette: {
    darkblue: {
      main: '#12264c',
      light: '#CFE3E3',
    },
    middleblue: {
      main: '#1968b1',
    },
    lightblue: {
      main: '#1976d2',
    },
    white: {
      main: '#FFFFFF!important',
    },
  },
  sectionpadding: {
    padding: '4% 0',
  },
  typography: {
    fontFamily: ['PT Sans'].join(','),
  },
  MuiTypography: {
    h4: {
      fontSize: '50px!important',
    },
  },
});

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route exact path='/' element={<MainPage />} />
            <Route exact path='/Shelter' element={<ShelterPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
