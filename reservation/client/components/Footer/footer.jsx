import React, { Fragment } from 'react';
import styles from './footer.scss';

import Modal from '../Modal.jsx';
import Icon from '../Icon.jsx';
import Property from '../Property.jsx';
import Price from '../Price.jsx';
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
            <Icon />
            <Property />
            <Price />
            <Booking showModal={this.showModal}/>
        </footer>
      </React.Fragment>
    );
  }
}

export default Reservation;