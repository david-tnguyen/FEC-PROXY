import React from 'react';
import getCurrentMonth from '../../../../utils/getCurrentMonth';
import getCurrentYear from '../../../../utils/getCurrentYear';

const MonthHeader = (props) => (
  <div id='current-period'>
    <strong>{getCurrentMonth(props.now)} {getCurrentYear(props.now)}</strong>
  </div>
);

export default MonthHeader;