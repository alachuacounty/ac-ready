import React from 'react';
import styles from './hero.module.css';
import hero from '../../images/family_hero.png';
import hero2 from '../../images/fam_grey.png';
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
            <h1 className={styles.hero_heading}>Don't Wait to Plan</h1>
            <h1 className={(styles.hero_heading, styles.second_tagline)}>
              Be Ready now
            </h1>
          </div>
          <div className={styles.textmsg}>
            <p className={styles.hero_paragraph}>
              Text "ALACHUA" to 888777 for <br /> emergency notifications
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
