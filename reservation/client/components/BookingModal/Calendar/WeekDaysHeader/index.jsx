import React from 'react';
import moment from 'moment';

const WeekDays = () => (
  moment.weekdaysMin().map((day, index) => (
    <th key={index} className='weekdays-short'>{day}</th>
  ))
);

export default WeekDays;