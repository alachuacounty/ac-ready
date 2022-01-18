import React from 'react';
import styles from './footer.module.css';
function Footer() {
  return (
    <div>
      <section className={styles.footer}>
        <p className={styles.copyright}> &copy; Alachua County</p>
        <p className={styles.footer_text}>
          <a
            target='_blank'
            className={styles.footer_link}
            href='https://alachuacounty.us/Depts/EO/Pages/Website-Accessibility.aspx'
          >
            View Alachua County's Website Accessibility Policy and Procedures
          </a>
        </p>
      </section>
    </div>
  );
}

export default Footer;
