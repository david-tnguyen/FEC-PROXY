import React from 'react';
import Button from './AirbnbButton.jsx';

class Booking extends React.Component {
  constructor(props) {
    super(props);
  }

  handleBooking = (e) => {
    this.props.showModal(true);
  }

  render() {
    return (
      <div id="book-container">
        <div id="book-spacing">
        <Button
          name="Book"
          handleClick={this.handleBooking}
        />
        </div>
      </div>
    );
  }
}

export default Booking;