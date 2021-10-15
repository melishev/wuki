import React from 'react';
import './index.scss';
import propTypes from 'prop-types';

const WookieUI = ({ children }) => <>{children}</>;

WookieUI.propTypes = {
  children: propTypes.node.isRequired,
};

export default WookieUI;
