import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Copy, Check } from 'react-feather';
import useStyles from './styles';
import { convertStylesToCss, unionClassNames } from '../utils/helpers';

const Code = ({ style, code, inline, ...props }) => {
  const jssCSS = useStyles();
  const inlineCSS = convertStylesToCss(style);

  const [classInline, setClassInline] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (inline) {
      setClassInline(jssCSS.codeInline);
    } else {
      setClassInline(jssCSS.code);
    }
  }, [inline]);

  function copyCode() {
    navigator.clipboard.writeText(code)
      .then(() => {
        setStatus('active');
        setTimeout(() => setStatus(''), 1000);
      });
  }

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <code className={unionClassNames(classInline, inlineCSS, status)} role="note" onClick={inline ? copyCode : null} {...props}>
      {!inline
        ? (
          <button type="button" aria-label="Copy" className={status} onClick={copyCode}>
            {!status
              ? <Copy size={20} strokeWidth={1} />
              : <Check size={20} strokeWidth={1} /> }
          </button>
        )
        : ''}
      {code}
    </code>
  );
};

Code.propTypes = {
  style: propTypes.oneOfType([
    propTypes.string,
    propTypes.number,
  ]),
  code: propTypes.string,
  inline: propTypes.bool,
};

Code.defaultProps = {
  style: null,
  code: '',
  inline: false,
};

export default Code;
