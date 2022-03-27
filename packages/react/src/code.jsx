/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import propTypes from 'prop-types';
import { Code as CodeCss } from '@wuki-ui/css';
import { Copy, Check } from 'lucide-react';
import { combineClass, convertStyle } from '@wuki-ui/utils';
import { useContextWuki } from './provider';

function Code({
  children, style, inline, beforeIcon, afterIcon, ...props
}) {
  const theme = useContextWuki();
  const { classes } = CodeCss(theme);
  const inlineCss = convertStyle(style);

  const [status, setStatus] = useState('disable');

  function copyCode() {
    navigator.clipboard.writeText(children)
      .then(() => {
        setStatus('active');
        setTimeout(() => setStatus('disable'), 1000);
      });
  }

  const codeMultiLine = (
    <pre className={combineClass(classes.code, inlineCss, status)} {...props}>
      <button type="button" aria-label="Copy" onClick={copyCode}>
        {status !== 'active'
          ? beforeIcon
          : afterIcon}
      </button>
      <code>{children}</code>
    </pre>
  );

  const codeInline = (
    <code
      className={combineClass(classes.codeInline, inlineCss, status)}
      onClick={copyCode}
      role="button"
      tabIndex={0}
      {...props}
    >
      {children}
    </code>
  );

  return inline
    ? codeInline
    : codeMultiLine;
}

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
