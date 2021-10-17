/* eslint-disable react/prop-types */
import React from 'react';
import styles from './index.module.scss';

const Col = ({ col, children }) => (
  <div className={styles[`col-${col}`]}>{children}</div>
);

export default Col;
