import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import useStyles from './styles';
import { convertStylesToCss, unionClassNames, globalPropTypes, globalDefaultProps } from '../utils/helpers';

const Text = ({ children, tag: Tag, variant, style }) => {
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

  return <Tag className={unionClassNames(classVariant, inlineCSS)}>{children}</Tag>;
};

Text.propTypes = {
  ...globalPropTypes,
  tag: propTypes.string,
  variant: propTypes.string,
};

Text.defaultProps = {
  ...globalDefaultProps,
  tag: 'p',
  variant: '',
};

export default Text;
