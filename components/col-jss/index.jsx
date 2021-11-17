/* eslint-disable guard-for-in, no-restricted-syntax */
import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import jss from './styles';

const Col = ({ children, tag: Tag, col, offset }) => {
  const styles = jss();
  const [collumn, setCollumn] = useState();

  useEffect(() => {
    switch (typeof col) {
      case 'object': {
        const a = [];
        for (const breakPoint in col) {
          const partCol = col[breakPoint];

          a.push(styles[`col-${breakPoint}-${partCol}`]);
          // a = `${a} col-${breakPoint}-${partCol}`;
        }
        setCollumn(a.join(' ').trim());
        break;
      }
      default: {
        setCollumn(styles[`col-xs-${col}`]);
      }
    }
  }, [col]);

  console.log(collumn, styles[collumn]);
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
