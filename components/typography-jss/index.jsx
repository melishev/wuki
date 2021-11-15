import React from 'react';
import propTypes from 'prop-types';
import { useTheme } from 'react-jss';
import jss from './styles';

const Text = ({ children, tag: Tag }) => {
  const theme = useTheme();
  const styles = jss({ theme });
  return <Tag className={styles[Tag]}>{children}</Tag>;
};

Text.propTypes = {
  children: propTypes.node,
  tag: propTypes.string,
};

Text.defaultProps = {
  children: '',
  tag: 'p',
};

export default Text;
