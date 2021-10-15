import React from 'react';
import propTypes from 'prop-types';
import './index.scss';

const Button = ({ label, type, size, pill, disabled }) => (
  <button
    type="button"
    className={`${type} ${size} ${pill ? 'pill' : ''}`}
    disabled={disabled}
  >
    {label}
  </button>
);

Button.propTypes = {
  label: propTypes.string,
  type: propTypes.string,
  size: propTypes.string,
  pill: propTypes.bool,
  disabled: propTypes.bool,
};

Button.defaultProps = {
  label: 'Button',
  type: 'primary',
  size: 'medium',
  pill: false,
  disabled: false,
};

export default Button;
