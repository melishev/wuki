import React from 'react';
import propTypes from 'prop-types';
import jss from './styles';

const Row = ({ children, tag: Tag }) => {
  const styles = jss();

  return <Tag className={styles.row}>{children}</Tag>;
};

Row.propTypes = {
  children: propTypes.node,
  tag: propTypes.string,
};

Row.defaultProps = {
  children: '',
  tag: 'div',
};

export default Row;
