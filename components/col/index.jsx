/* eslint-disable guard-for-in, no-restricted-syntax */
import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import useStyles from './styles';
import { convertStylesToCss, unionClassNames, globalPropTypes } from '../utils/helpers';

const Col = ({ children, tag: Tag, col, offset, style }) => {
  const jssCSS = useStyles();
  const inlineCSS = convertStylesToCss(style);
  const [arrClass, setArrClass] = useState();

  useEffect(() => {
    const styleCol = [];
    // Переписать на вывод обьекта
    switch (typeof col) {
    case 'object':
      for (const [bpKey, bpValue] of Object.entries(col)) {
        if (bpKey === 'xs') {
          styleCol.push(jssCSS[`col-${bpValue}`]);
        } else {
          styleCol.push(jssCSS[`col-${bpKey}-${bpValue}`]);
        }
      }
      break;
    default:
      styleCol.push(jssCSS[`col-${col}`]);
    }

    setArrClass(styleCol.join(' '));
  }, [col]);

  return (
    <Tag className={unionClassNames(arrClass, offset ? jssCSS[`col-offset-${offset}`] : '', inlineCSS)}>
      {children}
    </Tag>
  );
};

Col.propTypes = {
  ...globalPropTypes,
  col: propTypes.oneOfType([propTypes.number, propTypes.object]),
  offset: propTypes.number,
};

Col.defaultProps = {
  children: '',
  tag: 'div',
  col: 1,
  offset: null,
  style: null,
};

export default Col;
