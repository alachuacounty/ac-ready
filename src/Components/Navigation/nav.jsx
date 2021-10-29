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
            <a href=''>get notified</a>
          </li>
          <li className={styles.links}>
            <a href=''>prepare</a>
          </li>
          <li className={styles.links}>
            <a href=''>acr stickers</a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Navigation;
