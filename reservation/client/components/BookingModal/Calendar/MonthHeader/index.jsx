import React from 'react';
import getCurrentMonth from '../../../../utils/getCurrentMonth';
import getCurrentYear from '../../../../utils/getCurrentYear';
import styles from './monthHeader.scss';

const MonthHeader = (props) => (
  <div className={styles.monthHeader}>
    <strong>{getCurrentMonth(props.now)} {getCurrentYear(props.now)}</strong>
  </div>
);

export default MonthHeader;