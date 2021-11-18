import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import jss from './styles';

const Text = ({ children, tag: Tag, textStyle: TextStyle }) => {
  const styles = jss();
  const [textStyle, setTextStyle] = useState('');

  useEffect(() => {
    if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(Tag)) {
      setTextStyle(TextStyle || Tag);
    } else {
      setTextStyle(TextStyle);
    }
  }, [Tag]);

  return <Tag className={styles[textStyle]}>{children}</Tag>;
};

Text.propTypes = {
  children: propTypes.node,
  tag: propTypes.string,
  textStyle: propTypes.string,
};

Text.defaultProps = {
  children: '',
  tag: 'p',
  textStyle: '',
};

export default Text;
