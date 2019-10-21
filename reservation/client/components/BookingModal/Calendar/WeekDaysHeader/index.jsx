import React from 'react';
import moment from 'moment';
import styles from './weekdaysHeader.scss';

const Weekdays = () => (
  moment.weekdaysMin().map((day, index) => (
    <th key={index} className={styles.weekdaysShort}>{day}</th>
  ))
);

export default Weekdays;