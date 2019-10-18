import React, { Fragment } from 'react';
import styles from './footer.scss';

import Modal from '../Modal.jsx';
import Logo from '../Logo';
import Description from '../Description';
import ListingPrice from '../ListingPrice';
import Booking from '../Booking.jsx';

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  showModal = (openModal) => {
    this.setState({
      showModal: openModal
    });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.showModal && <Modal showModal={this.showModal}/>}
        <footer className={styles.wrapper}>
            <Logo />
            <Description />
            <ListingPrice />
            <Booking showModal={this.showModal}/>
        </footer>
      </React.Fragment>
    );
  }
}

export default Reservation;