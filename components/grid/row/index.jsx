/* eslint-disable react/require-default-props */
/* eslint-disable react/prop-types */

// НЕОБХОДИМО ЗАДОКУМЕНТИРОВАТЬ
import React from 'react';
import propTypes from 'prop-types';
import './index.scss';

const Row = ({ children, tag: Tag }) => <Tag className="row">{children}</Tag>;

Row.propTypes = {
  children: propTypes.node,
  tag: propTypes.string,
};

Row.defaultProps = {
  children: '',
  tag: 'div',
};

export default Row;
