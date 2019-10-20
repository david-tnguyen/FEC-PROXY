import React from 'react';
import styles from './guestModal.scss';

const GuestModal = () => (
  <div className={styles.wrapper}>
    <div className={styles.compact}>
      <div className={styles.compact}>
        <div className={styles.title}>Adults</div>
      </div>

      <div className={styles.compact}>
        <div className={styles.title}>Children</div>
        <div className={styles.title}>Ages 2-12</div>
      </div>

      <div className={styles.compact}>
        <div className={styles.title}>Infants</div>
        <div className={styles.title}>Under 2</div>
      </div>

      <div className={styles.warning}>
        3 guests maximum. Infants don’t count toward the number of guests.
      </div>
    </div>
  </div>
);

export default GuestModal;