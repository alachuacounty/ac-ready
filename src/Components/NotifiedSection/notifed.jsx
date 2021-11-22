import React from 'react';
import styles from './notified.module.css';
import fontstyles from '../../fonts.module.css';
function NotifiedSection() {
  return (
    <div>
      <section id='notified' className={styles.notified}>
        <h1 className={styles.notified_header}>get notified</h1>
        <p className={styles.notified_paragraph}>
          To receive automated weather alerts or time-sensitive information for
          your area, sign up for the{' '}
          <a
            className={styles.notified_link}
            href='https://member.everbridge.net/index/453003085613764#/signup'
          >
            <u>Alert Alachua Emergency Notification System</u>
          </a>
          . This is the best way to stay informed about local severe weather,
          unexpected road closures, building or neighborhood evacuations, and so
          much more.
          <br />
          <br />
          <p>
            You will receive time-sensitive messages wherever you specify, such
            as your home, mobile, or business phones, email address, text
            messages, and more. You pick where, you pick how!
          </p>
        </p>

        <a
          className={styles.notified_button}
          href='https://member.everbridge.net/index/453003085613764#/signup'
        >
          SIGN UP
        </a>
      </section>
    </div>
  );
}

export default NotifiedSection;
