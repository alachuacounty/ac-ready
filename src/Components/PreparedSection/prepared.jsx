import React from 'react';
import styles from './prepared.module.css';
import imageleft from '../../images/Group19.png';
import imageright from '../../images/Group20.png';
function PreparedSection() {
  return (
    <div>
      <section id='prepared' className={styles.prepared}>
        <h1 className={styles.prepared_header}>Prepare</h1>
        <div className={styles.acem_section}>
          <img className={styles.acem_image} src={imageleft} alt='' />
          <div className={styles.acem_text}>
            <h2 className={styles}>alachua county emergency management</h2>
            <p>
              Visit the Emergency Management Website for more preparedness
              information and other resources
            </p>
            <a className={styles.acem_visit} href='#'>
              VISIT WEBSITE
            </a>
          </div>
        </div>
        <div className={styles.fema_section}>
          <img className={styles.fema_image} src={imageleft} alt='' />
          <div className={styles.fema_text}>
            <h2 className={styles}>FEMA Disaster Supply Kit</h2>
            <p>
              Visit Fema to get information on building your disaster supply kit
              before a hurricane happens.
            </p>
            <a className={styles.fema_visit} href='#'>
              VISIT WEBSITE
            </a>
          </div>
        </div>
      </section>
      <hr className={styles.firsthr} />
      <hr className={styles.secondhr} />
      <hr className={styles.thirdhr} />
    </div>
  );
}

export default PreparedSection;
