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
          <img className={styles.left} src={imageleft} alt='' />
          <img className={styles.right} src={imageright} alt='' />
        </div>
      </section>
    </div>
  );
}

export default PreparedSection;
