import React, { Fragment } from 'react';
import GuestModal from '../GuestModal';
import styles from './guestButton.scss';

class GuestButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showGuestModal: false,
    };
  }

  handleGuest = (e) => {
    e.preventDefault();
    this.setState({
      showGuestModal: true
    });
  }

  onGuestModalBlur = () => {
    this.setState({
      showGuestModal: false
    });
  }

  render() {
    return (
      <React.Fragment>
        <label className={styles.label}>Guests</label>
        <div className={styles.wrapper}>
          <button
            className={styles.guestButton}
            onClick={this.handleGuest}
            onBlur={this.onGuestModalBlur}
          >
            <div className={styles.guestInput}>1 guest</div>
            <div className={styles.downArrow}></div>
          </button>
          {this.state.showGuestModal && <GuestModal />}
        </div>
      </React.Fragment>
    );
  }
}

export default GuestButton;