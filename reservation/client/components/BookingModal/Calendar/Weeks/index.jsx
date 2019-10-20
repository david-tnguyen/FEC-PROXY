import React from 'react';
import moment from 'moment';

class Weeks extends React.Component {
  constructor(props) {
    super(props);
  }

  weekdaysMin() {
    return (
      moment.weekdaysMin().map((day, index) => (
        <th key={index} className='weekdays-short'>{day}</th>
      ))
    );
  }

  render() {
    return (
      <table id='calendar'>
        <thead>
          <tr id='weekdays-header'>
            {this.weekdaysMin()}
          </tr>
        </thead>
        <tbody>
          {this.props.generateWeeks().map((week, index) => (
            <tr key={index}>{week}</tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Weeks;