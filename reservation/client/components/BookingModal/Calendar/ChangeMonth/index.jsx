import React from 'react';

const ChangeMonth = (props) => (
  <button
    className={props.class}
    onClick={props.handleMonthChange}
  >
    <svg id={props.icon}></svg>
  </button>
);

export default ChangeMonth;