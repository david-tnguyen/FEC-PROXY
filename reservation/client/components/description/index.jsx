import React from 'react';
import styles from './description.scss';

import Caption from './Caption.jsx';
import Ratings from './Ratings.jsx';

export default () => (
  <div className={styles.wrapper}>
    <Caption />
    <Ratings />
  </div>
);