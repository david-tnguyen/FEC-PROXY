import React from 'react';
import Price from '../ListingPrice';
import Ratings from '../Ratings';
import CloseButton from './CloseButton';
import BookingForm from './BookingForm';
import styles from './bookingModal.scss';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClose = (e) => {
    this.props.showModal(false);
  }

  render() {
    return (
      <div className={styles.modalContainer}>
        <div className={styles.modal}>
          <CloseButton handleClose={this.handleClose}/>
          <Price />
          <Ratings />
          <div className={styles.divider}/>
          <BookingForm showModal={this.props.showModal}/>
        </div>
      </div>
    );
  }
}

export default Modal;