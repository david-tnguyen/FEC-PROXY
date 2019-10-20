import React from 'react';
import Price from '../ListingPrice';
import Ratings from '../Ratings';
import GuestModal from '../GuestModal.jsx';
import Button from '../PrimaryButton';
import CloseButton from './CloseButton';
import DatePickerRange from './DatePickerRange';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showGuestModal: false,
    };
  }

  onGuestModalBlur = () => {
    this.setState({
      showGuestModal: false
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
          <label id="book-dates">Dates</label>
          <DatePickerRange />
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