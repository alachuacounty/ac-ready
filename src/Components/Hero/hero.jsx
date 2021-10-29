import React from 'react';
import styles from './hero.module.css';
import hero_img from '../../images/Hero.png';
function Hero() {
  return (
    <div>
      <section className={styles.hero}>
        <img className={styles.hero_img} />
      </section>
    </div>
  );
}

export default Hero;
