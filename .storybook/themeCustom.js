import { create } from '@storybook/theming';
import wukiTheme from '../components/utils/theme';

export default create({
  base: 'light',

  colorPrimary: 'hotpink',
  colorSecondary: 'deepskyblue',

  // UI
  appBg: '#fafafa',
  appContentBg: '#fafafa',
  // appBorderColor: 'blue',
  appBorderRadius: 0,

  // // Typography
  fontBase: wukiTheme.type.family,
  fontCode: 'monospace',

  // // Text colors
  // textColor: 'black',
  // textInverseColor: 'rgba(255,255,255,0.9)',

  // // Toolbar default and active colors
  // barTextColor: 'silver',
  // barSelectedColor: 'black',
  // barBg: 'hotpink',

  // // Form colors
  // inputBg: 'white',
  // inputBorder: 'silver',
  // inputTextColor: 'black',
  // inputBorderRadius: 4,

  brandTitle: 'Wuki UI',
  brandUrl: 'https://github.com/melishev/wuki',
  brandImage: 'https://raw.githubusercontent.com/melishev/wuki/master/.github/assets/logo.svg',
});