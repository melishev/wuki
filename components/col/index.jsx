/* eslint-disable guard-for-in, no-restricted-syntax */
import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import jss from './styles';
import convertStylesToCss from '../utils/helpers';

const Col = ({ children, tag: Tag, col, offset, style }) => {
  const jssStyles = jss();
  const inlineCSS = convertStylesToCss(style);
  const [arrClass, setArrClass] = useState();

  useEffect(() => {
    const styleCol = [];

    switch (typeof col) {
    case 'object':
      for (const [bpKey, bpValue] of Object.entries(col)) {
        if (bpKey === 'xs') {
          styleCol.push(jssStyles[`col-${bpValue}`]);
        } else {
          styleCol.push(jssStyles[`col-${bpKey}-${bpValue}`]);
        }
      }
      break;
    default:
      styleCol.push(jssStyles[`col-${col}`]);
    }

    setArrClass([...styleCol, offset ? jssStyles[`col-offset-${offset}`] : '', inlineCSS].join(' ').trim());
  }, [col]);

  return (
    <Tag className={arrClass}>
      {children}
    </Tag>
  );
};

Col.propTypes = {
  children: propTypes.node,
  tag: propTypes.string,
  col: propTypes.oneOfType([propTypes.number, propTypes.object]),
  offset: propTypes.number,
  style: propTypes.objectOf(propTypes.string),
};

Col.defaultProps = {
  children: '',
  tag: 'div',
  col: 1,
  offset: null,
  style: null,
};

export default Col;
