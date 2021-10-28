import React from 'react';
import styles from './nav.module.css';
function Navigation(props) {
  return (
    <div>
      <section className={styles.navigation}>
        <p>the navigation is going first</p>
      </section>
    </div>
  );
}

export default Navigation;
