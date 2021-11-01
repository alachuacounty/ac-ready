import React from 'react';
import Navigation from './Components/Navigation/nav';
import Hero from './Components/Hero/hero';
import PreparedSection from './Components/PreparedSection/prepared';
import NotifiedSection from './Components/NotifiedSection/notifed';
import StickerSection from './Components/StickerSection/sticker';
import Footer from './Components/Footer/footer';

import styles from './grid.module.css';
class App extends React.Component {
  render() {
    return (
      <div className={styles.grid_container}>
        <Navigation />
        <Hero className={styles.herocover} />
        <NotifiedSection />
        <PreparedSection />
        <StickerSection />
        <Footer />
      </div>
    );
  }
}

export default App;
