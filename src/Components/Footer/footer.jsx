import React from 'react';
import styles from './footer.module.css';
function Footer() {
  return (
    <div>
      <section className={styles.footer}>
        <p className={styles.copyright}> &copy; Alachua County</p>
        <p className={styles.footer_text}>
          View Alachua County's Website Accessibility Policy and Procedures
        </p>
      </section>
    </div>
  );
}

export default Footer;
