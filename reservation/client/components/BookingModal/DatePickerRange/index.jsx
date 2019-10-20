import React from 'react';
import DatePickerInput from '../DatePickerInput';
import Calendar from '../Calendar';

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
      inputActive: 'check-in'
    }, () => setTimeout(() => document.getElementById("calendar-modal").focus(), 0));
  }

  onEndDateInputSelect = () => {
    this.setState({
      showCalendarModal: true,
      inputActive: 'check-out'
    });
  }

  onCheckInDaySelect = (startDateSelected) => {
    this.setState({
      startDate: startDateSelected,
      inputActive: 'check-out'
    });
  }

  onCheckOutDaySelect = (endDateSelected) => {
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
    return (
      <div id="checkout-container">
        <DatePickerInput
          date={this.state.startDate && this.state.startDate.format('L')}
          inputActive={this.state.inputActive}
          handleInputSelect={this.onStartDateInputSelect}
          placeholder='Check-in'
          name='check-in'
        />
        <div className="next-step-checkout">
          <svg id="next-step-checkout-arrow"></svg>
        </div>
        <DatePickerInput
          date={this.state.endDate && this.state.endDate.format('L')}
          inputActive={this.state.inputActive}
          handleInputSelect={this.onEndDateInputSelect}
          placeholder='Checkout'
          name='check-out'
        />
        {this.state.showCalendarModal &&
        <Calendar
          type={this.state.inputActive}
          endDate={this.state.endDate}
          onDaySelect={this.state.inputActive === 'check-in' ? this.onCheckInDaySelect : this.onCheckOutDaySelect}
          startDate={this.state.startDate}
          onBlur={this.onCalendarBlur}
        />}
      </div>
    );
  }
}

export default DatePickerRange;