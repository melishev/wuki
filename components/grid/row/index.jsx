/* eslint-disable react/prop-types */
import React from 'react';
import styles from './index.module.scss';

const Row = ({ children }) => <div className={styles.row}>{children}</div>;

export default Row;
