import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { Text as TextCss } from '@wuki-ui/css';
import { combineClass, convertStyle } from '@wuki-ui/utils';
import { useContextWuki } from './provider';

function Text({
  children, style, tag: Tag, variant, ...props
}) {
  const theme = useContextWuki();
  const { classes } = TextCss(theme);
  const inlineCss = convertStyle(style);

  const [classVariant, setClassVariant] = useState('');

  useEffect(() => {
    if (Object.keys(classes).includes(Tag)) {
      setClassVariant(classes[variant] || classes[Tag]);
    } else {
      setClassVariant(classes[variant]);
    }
  }, [Tag, variant]);

  return <Tag className={combineClass(classVariant, inlineCss)} {...props}>{children}</Tag>;
}

Text.propTypes = {
  children: propTypes.node,
  /** Inline Styles assigned to the component will be converted to CSS class */
  style: propTypes.oneOfType([propTypes.object]),
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
