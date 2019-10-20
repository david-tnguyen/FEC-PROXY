import React from 'react';
import styles from './datePickerInput.scss';

class DatePickerInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input
        type="text"
        placeholder={this.props.placeholder}
        id={styles.dateInput}
        autoComplete="off"
        value={this.props.date}
        className={this.props.inputActive === this.props.name ? styles.dateInputSelected : ''}
        onClick={this.props.handleInputSelect}
      />
    );
  }
}

export default DatePickerInput;