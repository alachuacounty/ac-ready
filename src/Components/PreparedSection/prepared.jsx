import React from 'react';
import styles from './prepared.module.css';
import imageleft from '../../images/acem.jpg';
import imageleftblack from '../../images/imageleftblack.jpg';
import imageright from '../../images/imageright.jpg';
import imagerightblue from '../../images/imagerightblue.jpg';
function PreparedSection() {
  return (
    <div>
      <section id='prepared' className={styles.prepared}>
        <h1 className={styles.prepared_header}>Prepare</h1>
        <div className={styles.acem_section}>
          <div className={styles.acem_wrapper}>
            <a href='https://alachuacounty.us/Depts/EM/Pages/EM.aspx'>
              <img
                className={styles.acem_image}
                src={imageleftblack}
                alt='Image of the Alachua County Emergency Management Office'
              />
            </a>
          </div>
          <div className={styles.acem_text}>
            <h2 className={styles.acem_head}>
              <a
                className={styles.acem_head}
                href='https://alachuacounty.us/Depts/EM/Pages/EM.aspx'
              >
                Alachua County Emergency Management{' '}
              </a>
            </h2>
            <p className={styles.acem_para}>
              Visit the Emergency Management Website for more preparedness
              information and other resources
            </p>

            <a
              className={styles.acem_visit}
              href='https://alachuacounty.us/Depts/EM/Pages/EM.aspx'
            >
              VISIT ALACHUA COUNTY EMERGENCY MANAGEMENT WEBSITE
            </a>
          </div>
        </div>

        <div className={styles.fema_section}>
          <a
            className={styles.fema_wrapper}
            href='https://www.fema.gov/press-release/20210318/how-build-kit-emergencies'
          >
            <img
              className={styles.fema_image}
              src={imageright}
              alt='Image of a table with disaster supply items on it'
            />
          </a>
          <div className={styles.fema_text}>
            <h2 className={styles.fema_header}>
              <a
                className={styles.fema_header}
                href='https://www.fema.gov/press-release/20210318/how-build-kit-emergencies'
              >
                Disaster Supply Kit
              </a>
            </h2>
            <p className={styles.fema_para}>
              Visit Ready.gov to get information on building your disaster
              supply kit before an emergency happens.
            </p>
            <a className={styles.fema_visit} href='https://www.ready.gov/kit'>
              VISIT READY.GOV WEBSITE
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
