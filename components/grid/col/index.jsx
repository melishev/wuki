/* eslint-disable react/prop-types */
import React from 'react';
import propTypes from 'prop-types';
import './index.scss';

const Col = ({ children, col, offset }) => (
  <div className={`col-${col} offset-${offset}`}>{children}</div>
);

Col.propTypes = {
  children: propTypes.node,
  col: propTypes.number,
  offset: propTypes.number,
};

Col.defaultProps = {
  children: '',
  col: 1,
  offset: null,
};

export default Col;
