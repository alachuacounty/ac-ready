import * as React from 'react';
import AppBar from '../../components/AppBar';
import NavBarGrid from '../../components/NavMui/navmui';
import PreparedGrid from '../../components/PrepareMui/preparegrid';
import NotifyGrid from '../../components/NotifyMui/notifymui';
import HeroGrid from '../../components/HeroMui/heromui';
import StickerGrid from '../../components/StickerGrid/stickergrid';
import FooterGrid from '../../components/FooterMui/footermui';
import styles from '../../grid.module.css';

export default function MainPage() {
  return (
    <div className={styles.grid_container}>
      <AppBar />
      <NavBarGrid />
      <HeroGrid />
      <NotifyGrid />
      <PreparedGrid />
      <StickerGrid />
      <FooterGrid />
    </div>
  );
}
