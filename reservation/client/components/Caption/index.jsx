import React from 'react';
import styles from './caption.scss';

class Caption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Entire Loft In Cape Town'
    };
  }

  getName() {
    //ajax call to get title
  }

  render() {
    return (
      <div className={styles.caption}>{this.state.name}</div>
    );
  }
}

export default Caption;