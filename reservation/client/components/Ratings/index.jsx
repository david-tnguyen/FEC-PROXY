import React from 'react';
import styles from './ratings.scss';

class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: 166
    };
  }

  getNumberOfReviews() {
    //ajax call to get ra
  }

  render() {
    return (
      <button className={styles.wrapper}>
        <span className={styles.stars}></span>
        <span className={styles.numberOfReviews}>{this.state.reviews}</span>
      </button>
    );
  }
}

export default Ratings