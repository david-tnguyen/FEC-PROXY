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
        value={this.props.startDate}
        className={this.props.inputActive === 'check-in' ? 'checkin-label-select' : ''}
        onClick={this.props.handleInputSelect}
      />
    );
  }
}

export default DatePickerInput;