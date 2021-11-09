import React from 'react';
import styles from './notified.module.css';
function NotifiedSection() {
  return (
    <div>
      <section id='notified' className={styles.notified}>
        <h1 className={styles.notified_header}>get notified</h1>
        <p className={styles.notified_paragraph}>
          Sign up for <u>Alert Alachua Emergency Notification System</u>. This
          system enables us to provide you with critical information quickly in
          a variety of situations, such as severe weather, unexpected road
          closures, missing persons and evacuations of buildings or
          neighborhoods.
          <br />
          <br />
          <p>
            You will receive time-sensitive messages wherever you specify, such
            as your home, mobile or business phones, email address, text
            messages and more. You pick where, you pick how!
          </p>
        </p>

        <button className={styles.notified_button}>SIGN UP</button>
      </section>
    </div>
  );
}

export default NotifiedSection;
