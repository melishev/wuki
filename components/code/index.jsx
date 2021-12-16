import React, { useState } from 'react';
import propTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Copy, Check } from 'react-feather';
import useStyles from './styles';
import { convertStylesToCss, unionClassNames } from '../utils/helpers';

const Code = ({ style, code }) => {
  const jssCSS = useStyles();
  const inlineCSS = convertStylesToCss(style);

  const [status, setStatus] = useState('');

  function copyCode() {
    navigator.clipboard.writeText(code)
      .then(() => {
        setStatus('active');
        setTimeout(() => setStatus(''), 1000);
      });
  }

  return (
    <code className={unionClassNames(jssCSS.code, inlineCSS)}>
      <button type="button" aria-label="Copy" className={status} onClick={copyCode}>
        {!status
          ? <Copy size={20} strokeWidth={1} />
          : <Check size={20} strokeWidth={1} /> }
      </button>
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
};

Code.defaultProps = {
  style: null,
  code: '',
};

export default Code;
