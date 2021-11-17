import React from 'react';
import styles from './prepared.module.css';
import imageleft from '../../images/acem.jpg';
import imageleftblack from '../../images/imageleftblack.jpg';
import imageright from '../../images/imageright.jpg';
function PreparedSection() {
  return (
    <div>
      <section id='prepared' className={styles.prepared}>
        <h1 className={styles.prepared_header}>Prepare</h1>
        <div className={styles.acem_section}>
          <div className={styles.acem_wrapper}>
            <img className={styles.acem_image} src={imageleftblack} alt='' />
          </div>
          <div className={styles.acem_text}>
            <h2 className={styles.acem_head}>
              Alachua County Emergency Management
            </h2>
            <p className={styles.acem_para}>
              Visit the Emergency Management Website for more preparedness
              information and other resources
            </p>

            <a
              className={styles.acem_visit}
              href='https://alachuacounty.us/Depts/EM/Pages/EM.aspx'
            >
              VISIT WEBSITE
            </a>
          </div>
        </div>

        <div className={styles.fema_section}>
          <div className={styles.fema_wrapper}>
            <img className={styles.fema_image} src={imageright} alt='' />
          </div>
          <div className={styles.fema_text}>
            <h2 className={styles.fema_header}>FEMA Disaster Supply Kit</h2>
            <p className={styles.fema_para}>
              Visit FEMA to get information on building your disaster supply kit
              before a hurricane happens.
            </p>
            <a
              className={styles.fema_visit}
              href='https://www.fema.gov/press-release/20210318/how-build-kit-emergencies'
            >
              VISIT WEBSITE
            </a>
          </div>
        </div>
      </section>
      <hr className={styles.firsthr} />
      <hr className={styles.secondhr} />
      <hr className={styles.thirdhr} />
    </div>
  );
}

export default PreparedSection;
