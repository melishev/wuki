import React, { useState } from 'react';
import propTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Copy, Check } from 'react-feather';
import useStyles from './styles';
import { convertStylesToCss, unionClassNames } from '../utils/helpers';

const Code = ({ children, style, code, inline, ...props }) => {
  const jssCSS = useStyles();
  const inlineCSS = convertStylesToCss(style);

  const [status, setStatus] = useState('');

  function copyCode() {
    navigator.clipboard.writeText(code || children)
      .then(() => {
        setStatus('active');
        setTimeout(() => setStatus(''), 1000);
      });
  }

  const codeMultiLine = (
    <pre className={unionClassNames(jssCSS.code, inlineCSS, status)} {...props}>
      <button type="button" aria-label="Copy" onClick={copyCode}>
        {!status
          ? <Copy size={20} strokeWidth={1} />
          : <Check size={20} strokeWidth={1} /> }
      </button>
      <code>{code || children}</code>
    </pre>
  );

  const codeInline = (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <code
      className={unionClassNames(jssCSS.codeInline, inlineCSS, status)}
      onClick={copyCode}
      role="button"
      tabIndex={0}
      {...props}
    >
      {code || children}
    </code>
  );

  return !inline
    ? codeMultiLine
    : codeInline;
};

Code.propTypes = {
  children: propTypes.string,
  /** Inline Styles assigned to the component will be converted to CSS class */
  style: propTypes.oneOfType([propTypes.object]),
  /** Submits the source code to be displayed */
  code: propTypes.string,
  /** Should the source code be mapped to a string */
  inline: propTypes.bool,
};

Code.defaultProps = {
  children: '',
  style: null,
  code: '',
  inline: false,
};

export default Code;
