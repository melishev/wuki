import React, { useState } from 'react';
import propTypes from 'prop-types';
import { Copy, Check } from 'react-feather';
import useStyles from './styles';
import { convertStylesToCss, unionClassNames } from '../utils/helpers';

const Code = ({ children, style, inline, beforeIcon, afterIcon, ...props }) => {
  const jssCSS = useStyles();
  const inlineCSS = convertStylesToCss(style);

  const [status, setStatus] = useState('');

  function copyCode() {
    navigator.clipboard.writeText(children)
      .then(() => {
        setStatus('active');
        setTimeout(() => setStatus(''), 1000);
      });
  }

  const codeMultiLine = (
    <pre className={unionClassNames(jssCSS.code, inlineCSS, status)} {...props}>
      <button type="button" aria-label="Copy" onClick={copyCode}>
        {!status
          ? beforeIcon
          : afterIcon }
      </button>
      <code>{children}</code>
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
      {children}
    </code>
  );

  return !inline
    ? codeMultiLine
    : codeInline;
};

Code.propTypes = {
  /** Submits the source code to be displayed */
  children: propTypes.oneOfType([
    propTypes.string,
    propTypes.arrayOf(propTypes.string),
  ]),
  /** Inline Styles assigned to the component will be converted to CSS class */
  style: propTypes.oneOfType([propTypes.object]),
  /** Should the source code be mapped to a string */
  inline: propTypes.bool,
  /** Changes the icon until the button is clicked */
  beforeIcon: propTypes.node,
  /** Changes the icon after clicking on the button */
  afterIcon: propTypes.node,
};

Code.defaultProps = {
  children: '',
  style: null,
  inline: false,
  beforeIcon: <Copy size={20} strokeWidth={1} />,
  afterIcon: <Check size={20} strokeWidth={1} />,
};

export default Code;
