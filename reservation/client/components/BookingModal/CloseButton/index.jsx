import React from 'react';
import styles from './closeButton.scss';

class CloseButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        type="button"
        className={styles.wrapper}
        onClick={this.props.handleClose}
      >
        <svg
          className={styles.close}
          focusable="false"
        >
        </svg>
      </button>
    );
  }
}

export default CloseButton;