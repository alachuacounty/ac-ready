import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import AppBar from './Components/AppBar';
import Navigation from './Components/Navigation/nav';
import NavBarGrid from './Components/NavMui/navmui';
import Hero from './Components/Hero/hero';
import PreparedSection from './Components/PreparedSection/prepared';
import NotifiedSection from './Components/NotifiedSection/notifed';
import StickerSection from './Components/StickerSection/sticker';
import Footer from './Components/Footer/footer';
import PreparedGrid from './Components/PrepareMui/preparegrid';
import NotifyGrid from './Components/NotifyMui/notifymui';
import HeroGrid from './Components/HeroMui/heromui';
import StickerGrid from './Components/StickerGrid/stickergrid';
import FooterGrid from './Components/FooterMui/footermui';
import styles from './grid.module.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#12264c',
      light: '#CFE3E3',
    },
    secondary: {
      main: '#fff3d3',
    },
  },
  sectionpadding: {
    padding: '4% 0',
  },
  typography: {
    fontFamily: ['PT Sans'].join(','),
  },
});

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className={styles.grid_container}>
          <AppBar />
          {/* <Navigation /> */}
          <NavBarGrid />
          <HeroGrid />
          <NotifyGrid />
          {/* <PreparedGrid /> */}
          <StickerGrid />
          <FooterGrid />
          {/*  
         
               
        {/* 
       
     */}
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
