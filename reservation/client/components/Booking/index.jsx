import React from 'react';
import Button from '../PrimaryButton';
import styles from './booking.scss';

class Booking extends React.Component {
  constructor(props) {
    super(props);
  }

  handleBooking = () => {
    this.props.showModal(true);
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <Button
          name="Check Availability"
          handleClick={this.handleBooking}
        />
      </div>
    );
  }
}

export default Booking;