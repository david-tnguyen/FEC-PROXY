import React from 'react';

class DatePickerInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input
        type="text"
        placeholder={this.props.placeholder}
        id="checkin-label"
        autoComplete="off"
        value={this.props.date}
        className={this.props.inputActive === this.props.name ? 'checkin-label-select' : ''}
        onClick={this.props.handleInputSelect}
      />
    );
  }
}

export default DatePickerInput;