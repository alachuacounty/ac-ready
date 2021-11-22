import React from 'react';
import styles from './hero.module.css';
import hero from '../../images/family_hero.png';
import hero2 from '../../images/fam_grey_crop.png';

import 'animate.css';
function Hero() {
  return (
    <div>
      <section className={styles.hero}>
        <img
          className={styles.hero_img}
          src={hero2}
          alt='Hero Image of a family of four'
        />

        <div className={styles.hero_text}>
          <div className={styles.headers}>
            <h1 className={styles.hero_heading}>WHEN DISASTER STIKES</h1>
            <h1 className={(styles.hero_heading, styles.second_tagline)}>
              STAY INFORMED
            </h1>
          </div>
          <div className={styles.textmsg}>
            <p className={styles.hero_paragraph}>
              Text "ALACHUA" to 888777 <br />
            </p>
            <p className={styles.hero_paragraph}>
              to receive real-time County updates
            </p>
            <p className={styles.hero_paragraph}>
              during a large-scale incident or emergency
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
