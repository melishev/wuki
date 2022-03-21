import React, { createContext, useContext } from 'react';
import propTypes from 'prop-types';
import { WukiProvider as WukiProviderCss, Normalize } from '@wuki-ui/css';
import * as wukiTheme from '@wuki-ui/theme';

const context = createContext(wukiTheme);

function WukiProvider({ children, theme, cssBaseLine }) {
  WukiProviderCss(theme || wukiTheme); // lodash - merge

  if (cssBaseLine) {
    Normalize();
  }

  return (
    <context.Provider value={theme || wukiTheme}>
      {children}
    </context.Provider>
  );
}

export const useContextWuki = () => useContext(context);
WukiProvider.propTypes = {
  children: propTypes.node.isRequired,
  theme: propTypes.oneOfType([propTypes.object]),
  cssBaseLine: propTypes.bool,
};

WukiProvider.defaultProps = {
  theme: null,
  cssBaseLine: false,
};

export default WukiProvider;
