import React from 'react';
import DatePickerRange from '../DatePickerRange';
import GuestButton from '../GuestButton';
import BookButton from '../../PrimaryButton';
import styles from './bookingForm.scss';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: '',
      endDate: ''
    }
  }

  handleBooking = () => {
    // fetch('http://localhost:3002/checkout', {
    // // fetch('http://reservation-env.deb9z9c295.us-east-1.elasticbeanstalk.com/', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     checkin: this.state.startDate,
    //     checkout: this.state.endDate
    //   }),
    //   headers: {
    //     'Content-type': 'application/json'
    //   }
    // })
    // .then(() => {
    //   this.props.showModal(false);
    // });
    this.props.showModal(false);
  }


  onStartDateSelect = (startDateSelected) => {
    this.setState({
      startDate: startDateSelected
    });
  }

  onEndDateSelect = (endDateSelected) => {
    this.setState({
      endDate: endDateSelected
    });
  }

  render() {
    return (
      <form>
        <label className={styles.label}>Dates</label>
        <DatePickerRange
          handleStartDateSelect={this.onStartDateSelect}
          handleEndDateSelect={this.onEndDateSelect}
        />
        <GuestButton />
        <BookButton
          name='Book'
          handleClick={this.handleBooking}
        />
        <div className={styles.chargeWarning}>You won't be charged yet</div>
      </form>
    );
  }
}

export default BookingForm;