/* eslint-disable guard-for-in, no-restricted-syntax */
import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import './index.scss';

const Col = ({ children, tag: Tag, col, offset }) => {
  const [collumn, setCollumn] = useState();

  useEffect(() => {
    if (typeof col === 'object') {
      let a = '';
      for (const breakPoint in col) {
        const partBreakPoint = breakPoint !== 'xs' ? `${breakPoint}-` : '';
        const partCol = col[breakPoint];

        a = `${a} col-${partBreakPoint}${partCol}`;
      }
      setCollumn(a.trim());
    } else {
      setCollumn(`col-${col}`);
    }
  }, [col]);

  return (
    <Tag className={`${collumn} ${offset ? `offset-${offset}` : ''}`}>
      {children}
    </Tag>
  );
};

Col.propTypes = {
  children: propTypes.node,
  tag: propTypes.string,
  col: propTypes.oneOfType([propTypes.number, propTypes.object]),
  offset: propTypes.number,
};

Col.defaultProps = {
  children: '',
  tag: 'div',
  col: 1,
  offset: null,
};

export default Col;
