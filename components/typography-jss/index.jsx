import React from 'react';
import propTypes from 'prop-types';
import jss from './styles';

const Text = ({ children, tag: Tag, var: Var }) => {
  const styles = jss();
  return <Tag className={styles[Var]}>{children}</Tag>;
};

Text.propTypes = {
  children: propTypes.node,
  tag: propTypes.string,
  var: propTypes.string,
};

Text.defaultProps = {
  children: '',
  tag: 'p',
  var: 'body2',
};

export default Text;
