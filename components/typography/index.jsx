import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import useStyles from './styles';
import { convertStylesToCss, unionClassNames } from '../utils/helpers';

const Text = ({ children, tag: Tag, textStyle: TextStyle, style }) => {
  const jssCSS = useStyles();
  const inlineCSS = convertStylesToCss(style);
  const [textStyle, setTextStyle] = useState('');

  useEffect(() => {
    if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(Tag)) {
      setTextStyle(jssCSS[TextStyle] || jssCSS[Tag]);
    } else {
      setTextStyle(jssCSS[TextStyle]);
    }
  }, [Tag, TextStyle]);

  return <Tag className={unionClassNames(textStyle, inlineCSS)}>{children}</Tag>;
};

Text.propTypes = {
  children: propTypes.node,
  tag: propTypes.string,
  textStyle: propTypes.string,
  style: propTypes.objectOf(propTypes.string),
};

Text.defaultProps = {
  children: '',
  tag: 'p',
  textStyle: '',
  style: null,
};

export default Text;
