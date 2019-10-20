import getFirstDayOfMonth from '../../../../utils/getFirstDayOfMonth';
import React from 'react';

export default (now) => {
  const blankDays = [];
  for (let i = 0; i < getFirstDayOfMonth(now); i++) {
    blankDays.push(<td key={i}></td>);
  }
  return blankDays;
}