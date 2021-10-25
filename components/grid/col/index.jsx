import React from 'react';
import propTypes from 'prop-types';
import './index.scss';

const Col = ({ children, tag: Tag, col, offset }) => (
  <Tag className={`col-${col} ${offset ? `offset-${offset}` : ''}`}>
    {children}
  </Tag>
);

Col.propTypes = {
  children: propTypes.node,
  tag: propTypes.string,
  col: propTypes.number,
  offset: propTypes.number,
};

Col.defaultProps = {
  children: '',
  tag: 'div',
  col: 1,
  offset: null,
};

export default Col;
