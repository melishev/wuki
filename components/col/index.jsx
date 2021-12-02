/* eslint-disable guard-for-in, no-restricted-syntax */
import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import useStyles from './styles';
import { convertStylesToCss, unionClassNames, globalPropTypes, globalDefaultProps } from '../utils/helpers';

const Col = ({ children, tag: Tag, col, offset, style }) => {
  const jssCSS = useStyles();
  const inlineCSS = convertStylesToCss(style);

  const [classCol, setClassCol] = useState('');
  const [classOffset, setClassOffset] = useState('');

  /**
   * Creates and returns a className col
   */
  const classNameCol = () => {
    if (typeof col === 'object') {
      let a = '';
      for (const [bpKey, bpValue] of Object.entries(col)) {
        a = `${a} ${jssCSS[`col-${bpKey}-${bpValue}`]}`;
      }
      setClassCol(a);
    } else {
      setClassCol(jssCSS[`col-xs-${col}`]);
    }
  };

  /**
   * Creates and returns a class Name offset
   */
  const classNameOffset = () => {
    if (offset) {
      setClassOffset(jssCSS[`col-offset-${offset}`]);
    }
  };

  useEffect(() => {
    classNameCol();
    classNameOffset();
  }, [col, offset]);

  return (
    <Tag className={unionClassNames(classCol, classOffset, inlineCSS)}>
      {children}
    </Tag>
  );
};

Col.propTypes = {
  ...globalPropTypes,
  tag: propTypes.string,
  col: propTypes.oneOfType([propTypes.number, propTypes.object]),
  offset: propTypes.number,
};

Col.defaultProps = {
  ...globalDefaultProps,
  tag: 'div',
  col: 1,
  offset: null,
};

export default Col;
