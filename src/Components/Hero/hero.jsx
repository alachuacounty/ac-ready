import React from 'react';
import styles from './hero.module.css';
import hero from '../../images/family_hero.png';
function Hero() {
  return (
    <div>
      <section className={styles.hero}>
        <img className={styles.hero_img} src={hero} />

        <div className={styles.hero_text}>
          <h3>this is some text here</h3>
        </div>
      </section>
    </div>
  );
}

export default Hero;
