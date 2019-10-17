import React, { Fragment } from 'react';
import Icon from '../Icon.jsx';
import Property from '../Property.jsx';
import Price from '../Price.jsx';
import Booking from '../Booking.jsx';
import Modal from '../Modal.jsx';

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  showModal = (bool) => {
    this.setState({
      showModal: bool
    });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.showModal && <Modal showModal={this.showModal}/>}
        <footer id="footer">
          <div id="container">
            <div id="footer-content">
              <Icon />
              <Property />
              <Price />
              <Booking showModal={this.showModal}/>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Reservation;