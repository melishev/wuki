import React from 'react';
import propTypes from 'prop-types';
import { ThemeProvider } from 'react-jss';
import themeDefault from '../utils/theme';

const WukiProvider = ({ children, theme }) => (
  <ThemeProvider theme={{ ...themeDefault, ...theme }}>
    {children}
  </ThemeProvider>
);

WukiProvider.propTypes = {
  children: propTypes.node.isRequired,
  theme: propTypes.oneOfType([propTypes.object, propTypes.func]),
};

WukiProvider.defaultProps = {
  theme: {},
};

export default WukiProvider;
