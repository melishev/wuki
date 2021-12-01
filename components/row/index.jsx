import React from 'react';
import propTypes from 'prop-types';
import useStyles from './styles';
import { convertStylesToCss, unionClassNames, globalPropTypes, globalDefaultProps } from '../utils/helpers';

const Row = ({ children, tag: Tag, style }) => {
  const jssCSS = useStyles();
  const inlineCSS = convertStylesToCss(style);

  return <Tag className={unionClassNames(jssCSS.row, inlineCSS)}>{children}</Tag>;
};

Row.propTypes = {
  ...globalPropTypes,
  tag: propTypes.string,
};

Row.defaultProps = {
  ...globalDefaultProps,
  tag: 'div',
};

export default Row;
