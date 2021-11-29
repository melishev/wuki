import React from 'react';
import propTypes from 'prop-types';
import useStyles from './styles';
import { convertStylesToCss, unionClassNames } from '../utils/helpers';

const Row = ({ children, tag: Tag, style }) => {
  const jssCSS = useStyles();
  const inlineCSS = convertStylesToCss(style);

  return <Tag className={unionClassNames(jssCSS.row, inlineCSS)}>{children}</Tag>;
};

Row.propTypes = {
  children: propTypes.node,
  tag: propTypes.string,
  style: propTypes.objectOf(propTypes.string),
};

Row.defaultProps = {
  children: '',
  tag: 'div',
  style: null,
};

export default Row;
