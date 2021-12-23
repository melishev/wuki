import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import useStyles from './styles';
import { convertStylesToCss, unionClassNames } from '../utils/helpers';

const Text = ({ children, tag: Tag, variant, style, ...props }) => {
  const jssCSS = useStyles();
  const inlineCSS = convertStylesToCss(style);

  const [classVariant, setClassVariant] = useState('');

  useEffect(() => {
    if (Object.keys(jssCSS).includes(Tag)) {
      setClassVariant(jssCSS[variant] || jssCSS[Tag]);
    } else {
      setClassVariant(jssCSS[variant]);
    }
  }, [Tag, variant]);

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Tag className={unionClassNames(classVariant, inlineCSS)} {...props}>{children}</Tag>;
};

Text.propTypes = {
  children: propTypes.node,
  /** Inline Styles assigned to the component will be converted to CSS class */
  style: propTypes.oneOfType([
    propTypes.string,
    propTypes.number,
  ]),
  /** For better semantics, you can override the default HTML tag */
  tag: propTypes.string,
  /** Allows you to tell the component to use any variation from the theme */
  variant: propTypes.string,
};

Text.defaultProps = {
  children: '',
  style: null,
  tag: 'p',
  variant: '',
};

export default Text;
