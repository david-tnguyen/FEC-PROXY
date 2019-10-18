import React from 'react';
import styles from './listingPrice.scss';

class Price extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: '57'
    };
  }

  getPrice() {
    //ajax call
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <span className={styles.price}>${this.state.price} </span>
        <span className={styles.duration}>/ night</span>
      </div>
    );
  }
}

export default Price;