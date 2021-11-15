import React from 'react';
import propTypes from 'prop-types';
import './index.scss';

const Text = ({ children, tag: Tag }) => <Tag>{children}</Tag>;

Text.propTypes = {
  children: propTypes.node,
  tag: propTypes.string,
};

Text.defaultProps = {
  children: '',
  tag: 'p',
};

export default Text;
