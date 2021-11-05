import React from 'react';
import styles from './notified.module.css';
function NotifiedSection() {
  return (
    <div>
      <section id='notified' className={styles.notified}>
        <h1 className={styles.notified_header}>get notified</h1>
        <p className={styles.notified_paragraph}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
          corporis architecto optio, corrupti earum delectus voluptatem quos
          harum possimus odit facere est nam voluptas unde. Saepe doloremque eum
          eos odit ut accusantium aliquid deserunt, tempore itaque molestias.
          Nostrum, sapiente iure!
          <br />
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            molestiae doloremque quidem fuga vel consectetur illum error
            similique qui, totam odit sequi sunt, saepe dignissimos pariatur,
            fugit iusto optio placeat velit temporibus quasi sed deserunt omnis.
            Pariatur, commodi aliquid sed aperiam eligendi, sit impedit repellat
            placeat error maxime ducimus consectetur?
          </p>
        </p>

        <button className={styles.notified_button}>SIGN UP</button>
      </section>
    </div>
  );
}

export default NotifiedSection;
