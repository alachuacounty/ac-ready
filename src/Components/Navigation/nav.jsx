import React from 'react';
import styles from './nav.module.css';
import acr_logo from '../../images/ACR_logo.png';
function Navigation(props) {
  return (
    <div>
      <section className={styles.navigation}>
        <img className={styles.acr_logo} src={acr_logo} />

        <ul className={styles.navlinks}>
          <li className={styles.links}>
            <a href='#notified'>get notified</a>
          </li>
          <li className={styles.links}>
            <a href='#prepared'>prepare</a>
          </li>
          <li className={styles.links}>
            <a href='#sticker'>acr stickers</a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Navigation;
