import React from 'react';
import DatePickerInput from '../DatePickerInput';
import Calendar from '../Calendar';
import styles from './datePickerRange.scss';

class DatePickerRange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCalendarModal: false,
      startDate: '',
      endDate: '',
      inputActive: ''
    };
  }

  onStartDateInputSelect = () => {
    this.setState({
      showCalendarModal: true,
      inputActive: 'startDate'
    }, () => setTimeout(() => document.getElementById("calendar-modal").focus(), 0));
  }

  onEndDateInputSelect = () => {
    this.setState({
      showCalendarModal: true,
      inputActive: 'endDate'
    });
  }

  onStartDateSelect = (startDateSelected) => {
    this.setState({
      startDate: startDateSelected,
      inputActive: 'endDate'
    });
  }

  onEndDateSelect = (endDateSelected) => {
    this.setState({
      showCalendarModal: false,
      endDate: endDateSelected
    });
  }

  onCalendarBlur = () => {
    this.setState({
      inputActive: '',
      showCalendarModal: false
    });
  }

  render() {
    console.log(this.state.inputActive)
    return (
      <div className={styles.wrapper}>
        <DatePickerInput
          date={this.state.startDate && this.state.startDate.format('L')}
          inputActive={this.state.inputActive}
          handleInputSelect={this.onStartDateInputSelect}
          placeholder='Check-in'
          name='startDate'
        />

        <svg className={styles.nextArrow} />

        <DatePickerInput
          date={this.state.endDate && this.state.endDate.format('L')}
          inputActive={this.state.inputActive}
          handleInputSelect={this.onEndDateInputSelect}
          placeholder='Checkout'
          name='endDate'
        />
        {this.state.showCalendarModal &&
        <Calendar
          type={this.state.inputActive}
          endDate={this.state.endDate}
          onDaySelect={this.state.inputActive === 'startDate' ? this.onStartDateSelect : this.onEndDateSelect}
          startDate={this.state.startDate}
          onBlur={this.onCalendarBlur}
        />}
      </div>
    );
  }
}

export default DatePickerRange;