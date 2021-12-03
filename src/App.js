import React from 'react';
import AppBar from './Components/AppBar';
import Navigation from './Components/Navigation/nav';
import Hero from './Components/Hero/hero';
import PreparedSection from './Components/PreparedSection/prepared';
import NotifiedSection from './Components/NotifiedSection/notifed';
import StickerSection from './Components/StickerSection/sticker';
import Footer from './Components/Footer/footer';
import DemoCarousel from './Components/Carousel';
import NotifyGrid from './Components/NotifyMui/notifymui';
import HeroGrid from './Components/HeroMui/heromui';
import StickerGrid from './Components/StickerGrid/stickergrid';
import styles from './grid.module.css';
class App extends React.Component {
  render() {
    return (
      <div className={styles.grid_container}>
        <AppBar />
        <Navigation />
        <HeroGrid />
        <NotifyGrid />
        <PreparedSection />
        <StickerGrid />
        <Footer />
        {/*  
         
               
        {/* 
       
     */}
      </div>
    );
  }
}

export default App;
