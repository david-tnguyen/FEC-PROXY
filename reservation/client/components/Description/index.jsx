import React from 'react';
import styles from './description.scss';

import Caption from '../Caption';
import Ratings from '../Ratings';

export default () => (
  <div className={styles.wrapper}>
    <Caption />
    <Ratings />
  </div>
);