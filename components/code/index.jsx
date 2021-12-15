import React from 'react';
import propTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Copy } from 'react-feather';
import useStyles from './styles';
import { convertStylesToCss, unionClassNames } from '../utils/helpers';

// eslint-disable-next-line react/prop-types
const Code = ({ code, style }) => {
  const jssCSS = useStyles();
  const inlineCSS = convertStylesToCss(style);

  return (
    <code className={unionClassNames(jssCSS.code, inlineCSS)}>
      <button type="button" aria-label="Copy">
        <Copy size={20} strokeWidth={1} />
      </button>
      {code}
    </code>
  );
};

Code.propTypes = {
  // children: propTypes.node,
  style: propTypes.oneOfType([
    propTypes.string,
    propTypes.number,
  ]),
};

Code.defaultProps = {
  // children: '',
  style: null,
};

export default Code;
