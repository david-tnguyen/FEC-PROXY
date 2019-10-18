import React from 'react';
import styles from './primaryButton.scss';

class PrimaryButton extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.handleClick();
  }

  render() {
    return (
      <button
        type="submit"
        className={styles.primary}
        onClick={this.handleClick}
      >
        {this.props.name}
      </button>
    );
  }
}

export default PrimaryButton;