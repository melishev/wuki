import { create } from '@storybook/theming';
import { type, colors } from '../theme';

export default create({
  base: 'light',

  // colorPrimary: 'hotpink',
  colorSecondary: colors.blue[500],

  // UI
  appBg: colors.grey[25],
  appContentBg: colors.grey[25],
  appBorderColor: colors.grey[50],
  appBorderRadius: 0,

  // Typography
  fontBase: type.family,
  fontCode: 'monospace',

  // // Text colors
  // textColor: 'black',
  // textInverseColor: 'rgba(255,255,255,0.9)',

  // // Toolbar default and active colors
  // barTextColor: 'silver',
  // barSelectedColor: 'black',
  barBg: colors.grey[25],

  // // Form colors
  // inputBg: 'white',
  // inputBorder: 'silver',
  // inputTextColor: 'black',
  // inputBorderRadius: 4,

  brandTitle: 'Wuki UI',
  brandUrl: 'https://github.com/melishev/wuki',
  brandImage: 'https://raw.githubusercontent.com/melishev/wuki/master/.github/assets/logo.svg',
});
