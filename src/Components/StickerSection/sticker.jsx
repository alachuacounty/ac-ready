import React from 'react';
import styles from './sticker.module.css';
import image8 from '../../images/Image8.png';
import Table from '../LocationTable/index';
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

        <Table className={styles.table} />
      </section>
    </div>
  );
}

export default StickerSection;
