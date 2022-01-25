/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
import React from 'react';
import propTypes from 'prop-types';
import useStyles from './styles';
import { convertStylesToCss, unionClassNames } from '../utils/helpers';

import Text from '../text';

// eslint-disable-next-line react/prop-types
const Button = ({ children, style, size }) => {
  useStyles();
  const inlineCSS = convertStylesToCss(style);

  return (
    // eslint-disable-next-line react/button-has-type
    <button className={unionClassNames(`wk-btn-${size}`, inlineCSS)}>
      <Text variant={size === 'large' ? 'subTitle' : (size === 'medium' ? 'body1' : (size === 'small' ? 'body2' : (size === 'mini' ? 'small' : '')))}>{children}</Text>
    </button>
  );
};

Button.propTypes = {
  children: propTypes.node,
  /** Inline Styles assigned to the component will be converted to CSS class */
  style: propTypes.oneOfType([propTypes.object]),
  size: propTypes.string,
  // /** For better semantics, you can override the default HTML tag */
  // tag: propTypes.string,
  // /** Number of occupied columns in the grid */
  // col: propTypes.oneOfType([propTypes.number, propTypes.object]),
  // /** Left indent, relative to the entire grid */
  // offset: propTypes.number,
  // /** Defines the entity of a component */
  // container: propTypes.bool,
};

Button.defaultProps = {
  children: '',
  style: null,
  size: 'medium',
  // tag: 'div',
  // col: 1,
  // offset: null,
  // container: false,
};

export default Button;
