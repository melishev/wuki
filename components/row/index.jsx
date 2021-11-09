import React from 'react';
import propTypes from 'prop-types';
import './index.scss';

const Row = ({ children, tag: Tag, gap }) => (
  <Tag className="row" style={{ gap: `${gap}px` }}>
    {children}
  </Tag>
);

Row.propTypes = {
  children: propTypes.node,
  tag: propTypes.string,
  gap: propTypes.number,
};

Row.defaultProps = {
  children: '',
  tag: 'div',
  gap: null,
};

export default Row;
