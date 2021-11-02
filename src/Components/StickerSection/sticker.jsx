import React from 'react';
import styles from './sticker.module.css';
import image8 from '../../images/Image8.png';
function StickerSection() {
  return (
    <div>
      <section id='sticker' className={styles.sticker}>
        <h1 className={styles.sticker_header}>Get your acr sticker</h1>
        <img className={styles.stickerimage} src={image8} alt='' />
        <p className={styles.stickertext}>
          You can pick up your own ACR bumper sticker for free from the
          following locations:
        </p>
        <div className={styles.departments}>
          <p className={styles.acfr}>
            Alachua County Fire Rescue <br /> 123 Dept Road
          </p>
          <p className={styles.gvilleoffice}>
            Visit Gainesville Office <br /> 123 NW Main Street
          </p>
        </div>
      </section>
    </div>
  );
}

export default StickerSection;
