import React from 'react';
import WeekDays from '../WeekDaysHeader';
import styles from './weeks.scss';

const Weeks = (props) => (
  <table className={styles.wrapper}>
    <thead>
      <tr>
        <WeekDays />
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