import React from 'react';
import Weekdays from '../WeekdaysHeader';
import styles from './weeks.scss';

const Weeks = (props) => (
  <table className={styles.wrapper}>
    <thead>
      <tr>
        <Weekdays />
      </tr>
    </thead>
    <tbody>
      {props.generateWeeks().map((week, index) => (
        <tr key={index}>{week}</tr>
      ))}
    </tbody>
  </table>
);

export default Weeks;