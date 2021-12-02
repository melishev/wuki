import React from 'react';
import propTypes from 'prop-types';
import { ThemeProvider } from 'react-jss';
import themeDefault from '../utils/theme';
import style from '../utils/globalStyleSheet';
import normalize from '../utils/normalize';

const WukiProvider = ({ children, theme, cssBaseLine }) => {
  style(themeDefault)();

  if (cssBaseLine) {
    normalize();
  }

  return (
    <ThemeProvider theme={{ ...themeDefault, ...theme }}>
      {children}
    </ThemeProvider>
  );
};

WukiProvider.propTypes = {
  children: propTypes.node.isRequired,
  theme: propTypes.oneOfType([propTypes.object, propTypes.func]),
  cssBaseLine: propTypes.bool,
};

WukiProvider.defaultProps = {
  theme: {},
  cssBaseLine: false,
};

export default WukiProvider;
