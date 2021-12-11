/* eslint-disable no-restricted-syntax */
import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import useStyles from './styles';
import { convertStylesToCss, unionClassNames } from '../utils/helpers';

const Grid = ({ children, tag: Tag, col, offset, container, style }) => {
  const jssCSS = useStyles();
  const inlineCSS = convertStylesToCss(style);

  const [classCol, setClassCol] = useState('');
  const [classOffset, setClassOffset] = useState('');
  const [classContainer, setClassContainer] = useState('');

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
    if (container) {
      setClassContainer(jssCSS.row);
    } else {
      classNameCol();
      classNameOffset();
    }
  }, [container, col, offset]);

  return (
    <Tag className={unionClassNames(classCol, classOffset, classContainer, inlineCSS)}>{children}</Tag>
  );
};

Grid.propTypes = {
  children: propTypes.node,
  /** Inline Styles assigned to the component will be converted to CSS class */
  style: propTypes.oneOfType([
    propTypes.string,
    propTypes.number,
  ]),
  /** For better semantics, you can override the default HTML tag */
  tag: propTypes.string,
  col: propTypes.oneOfType([propTypes.number, propTypes.object]),
  offset: propTypes.number,
  container: propTypes.bool,
};

Grid.defaultProps = {
  children: '',
  style: null,
  tag: 'div',
  col: 1,
  offset: null,
  container: false,
};

export default Grid;
