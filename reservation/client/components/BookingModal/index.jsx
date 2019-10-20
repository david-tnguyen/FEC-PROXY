import React from 'react';
import Price from '../ListingPrice';
import Ratings from '../Ratings';
import BookButton from '../PrimaryButton';
import CloseButton from './CloseButton';
import DatePickerRange from './DatePickerRange';
import GuestButton from './GuestButton';
import styles from './bookingModal.scss';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  handleBooking = () => {
    if (!this.state.startDate) {
      document.getElementById('startDate').focus();
    } else if (!this.state.endDate) {
      document.getElementById('endDate').focus();
    } else {
      fetch('http://localhost:3002/checkout', {
      // fetch('http://reservation-env.deb9z9c295.us-east-1.elasticbeanstalk.com/', {
        method: 'POST',
        body: JSON.stringify({
          checkin: this.state.startDate,
          checkout: this.state.endDate
        }),
        headers: {
          'Content-type': 'application/json'
        }
      })
      .then(() => {
        this.props.showModal(false);
      });
    }
  }

  handleClose = (e) => {
    this.props.showModal(false);
  }

  render() {
    return (
      <div className={styles.modal}>
        <CloseButton handleClose={this.handleClose}/>
        <Price />
        <Ratings />
        <div className={styles.divider}/>
        <form>
          <label className={styles.label}>Dates</label>
          <DatePickerRange />
          <GuestButton />
          <BookButton
            name='Book'
            handleClick={this.handleBooking}
          />
          <div className={styles.chargeWarning}>You won't be charged yet</div>
        </form>
      </div>
    );
  }
}

export default Modal;