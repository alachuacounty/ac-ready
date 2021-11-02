import React from 'react';
import styles from './prepared.module.css';
import imageleft from '../../images/Group19.png';
import imageright from '../../images/Group20.png';
function PreparedSection() {
  return (
    <div>
      <section className={styles.prepared}>
        <h1 className={styles.prepared_header}>Prepare</h1>
        <div className={styles.image_grid}>
          <div className={styles.left}>
            <img src={imageleft} alt='' />
            <div className={styles.test}>
              <h2 className={styles.prepared_button}>
                alachua county emergency management
              </h2>
            </div>
          </div>
          <div className={styles.right}>
            <img src={imageright} alt='' />
            <div className={styles.test}>
              <h2 className={styles.prepared_button}>
                fema disaster supply kit
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PreparedSection;
