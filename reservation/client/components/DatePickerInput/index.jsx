import React from 'react';

class DatePickerInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: '57'
    };
  }

  render() {
    return (
      <input
        type="text"
        placeholder="Check-in"
        id="checkin-label"
        autoComplete="off"
        value={this.state.startDate && this.state.startDate.format('L')}
        onChange={(e) => console.log(e)}
        className={this.state.inputActive === 'check-in' ? 'checkin-label-select' : ''}
        onClick={this.onStartDateInputSelect}
      />
    );
  }
}

export default DatePickerInput;