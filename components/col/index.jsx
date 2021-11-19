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
        for (const [bpKey, bpValue] of Object.entries(col)) {
          if (bpKey === 'xs') {
            a.push(styles[`col-${bpValue}`]);
          } else {
            a.push(styles[`col-${bpKey}-${bpValue}`]);
          }
        }
        setCollumn(a.join(' ').trim());
        break;
      }
      default: {
        setCollumn(styles[`col-${col}`]);
      }
    }
  }, [col]);

  return (
    <Tag
      className={`${collumn} ${offset ? styles[`col-offset-${offset}`] : ''}`}
    >
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
