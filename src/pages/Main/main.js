import * as React from 'react';
import { makeStyles } from '@mui/styles';
import AppBar from '../../Components/AppBar';
import NavBarGrid from '../../Components/NavMui/navmui';
import PreparedGrid from '../../Components/PrepareMui/preparegrid';
import NotifyGrid from '../../Components/NotifyMui/notifymui';
import HeroGrid from '../../Components/HeroMui/heromui';
import StickerGrid from '../../Components/StickerGrid/stickergrid';
import FooterGrid from '../../Components/FooterMui/footermui';
import styles from '../../grid.module.css';


const useStyles = makeStyles((theme) => ({}));

export default function MainPage() {
    const classes = useStyles();
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
