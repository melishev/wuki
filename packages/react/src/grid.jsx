import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { Grid as GridCss } from '@wuki-ui/css';
import { combineClass, convertStyle } from '@wuki-ui/utils';
import { useContextWuki } from './provider';

function Grid({
  children, style, tag: Tag, col, offset, container, ...props
}) {
  const theme = useContextWuki();
  const { classes } = GridCss(theme);
  const inlineCss = convertStyle(style);

  const [classCol, setClassCol] = useState('');
  const [classOffset, setClassOffset] = useState('');
  const [classContainer, setClassContainer] = useState('');

  /**
   * Creates and returns a className col
   */
  const classNameCol = () => {
    if (typeof col === 'object') {
      setClassCol(
        Object.entries(col).reduce((acc, [key, value]) => {
          acc.push(classes[`col-${key}-${value}`]);
          return acc;
        }, []).join(' '),
      );
    } else {
      setClassCol(classes[`col-xs-${col}`]);
    }
  };

  /**
   * Creates and returns a class Name offset
   */
  const classNameOffset = () => {
    if (offset) {
      setClassOffset(classes[`offset-${offset}`]);
    }
  };

  useEffect(() => {
    if (container) {
      setClassContainer(classes.con);
    } else {
      classNameCol();
      classNameOffset();
    }
  }, [container, col, offset]);

  return (
    <Tag className={combineClass(classCol, classOffset, classContainer, inlineCss)} {...props}>
      {children}
    </Tag>
  );
}

Grid.propTypes = {
  children: propTypes.node,
  /** Inline Styles assigned to the component will be converted to CSS class */
  style: propTypes.oneOfType([propTypes.object]),
  /** For better semantics, you can override the default HTML tag */
  tag: propTypes.string,
  /** Number of occupied columns in the grid */
  col: propTypes.oneOfType([propTypes.number, propTypes.object]),
  /** Left indent, relative to the entire grid */
  offset: propTypes.number,
  /** Defines the entity of a component */
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
