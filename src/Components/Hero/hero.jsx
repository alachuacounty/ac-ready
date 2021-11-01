import React from 'react';
import styles from './hero.module.css';
import hero from '../../images/Hero.png';
function Hero() {
  return (
    <div>
      <section className={styles.hero}>
        <img className={styles.hero_img} src={hero} />
      </section>
    </div>
  );
}

export default Hero;
