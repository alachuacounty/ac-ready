import React from 'react';
import styles from './appbar.module.css';
import fontstyles from '../../fonts.module.css';
import aclogo from '../../images/Seal_of_Alachua_County_Florida.png';
function AppBar() {
  return (
    <div>
      <section className={styles.appbar}>
        <img className={styles.logo} alt='Alachua County Logo' src={aclogo} />
        <h2 className={styles.text}>Alachua County</h2>
      </section>
    </div>
  );
}

export default AppBar;
