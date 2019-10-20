import React from 'react';
import WeekDays from '../WeekDaysHeader';

const Weeks = (props) => (
  <table id='calendar'>
    <thead>
      <tr id='weekdays-header'>
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