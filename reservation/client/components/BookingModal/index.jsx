import React from 'react';
import Price from '../ListingPrice';
import Ratings from '../Ratings';
import GuestModal from '../GuestModal.jsx';
import Button from '../PrimaryButton';
import Calendar from '../Calendar.jsx';
import CloseButton from './CloseButton';
import DatePickerInput from '../DatePickerInput';
import classNames from 'classnames';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showGuestModal: false,
      showCalendarModal: false,
      startDate: '',
      endDate: '',
      inputActive: ''
    };

  }

  onGuestModalBlur = () => {
    this.setState({
      showGuestModal: false
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

  onCalendarBlur = () => {
    this.setState({
      inputActive: '',
      showCalendarModal: false
    });
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

  handleGuest = (e) => {
    e.preventDefault();
    this.setState({
      showGuestModal: true
    });
  }

  handleClose = (e) => {
    this.props.showModal(false);
  }

  render() {
    return (
      <div id="modal-backdrop">
        <CloseButton handleClose={this.handleClose}/>
        <Price />
        <Ratings />
        <div id="modal-divider" />
        <form>
          <div id="modal-book-spacing">
            <label id="book-dates">Dates</label>
            <div id="checkout-container">
              <DatePickerInput
                startDate={this.state.startDate && this.state.startDate.format('L')}
                inputActive={this.state.inputActive}
                handleInputSelect={this.onStartDateInputSelect}
              />

              <div
                className="next-step-checkout"
              >
                <svg id="next-step-checkout-arrow"></svg>
              </div>
                <input
                  type="text"
                  placeholder="Checkout"
                  autoComplete="off"
                  id="checkin-label"
                  value={this.state.endDate && this.state.endDate.format('L')}
                  onChange={(e) => console.log(e)}
                  className={
                    classNames({
                      'checkin-label-select': this.state.inputActive === 'check-out'
                    })
                  }
                  onClick={this.onEndDateInputSelect}
                />
                {this.state.showCalendarModal && <Calendar type={this.state.inputActive} endDate={this.state.endDate} onDaySelect={this.state.inputActive === 'check-in' ? this.onCheckInDaySelect : this.onCheckOutDaySelect} startDate={this.state.startDate} onBlur={this.onCalendarBlur}/>}
              </div>
            </div>
          <div id="guest-spacing">
            <label id="guests">Guests</label>
            <div>
              <button
                id="guests-placeholder"
                onClick={this.handleGuest}
                onBlur={this.onGuestModalBlur}
              >
                <div id="guest1">
                  <div id="guest2">
                    <div id="guestcell">
                      <div className="guest-label">1 guest</div>
                    </div>
                    <div id="down-arrow"></div>
                  </div>
                </div>
              </button>
              <div id="modal2">
                {this.state.showGuestModal && <GuestModal />}
              </div>
            </div>
          </div>
          <div id="book-top-spacing"></div>
          <Button
            name='Book'
            handleClick={this.handleBooking}
          />
          <div id="charge">You won't be charged yet</div>
        </form>
      </div>
    );
  }
}

export default Modal;