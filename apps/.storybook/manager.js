import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';
import { type, colors } from '../../packages/theme';

const customTheme = create({
  base: 'light',

  // colorPrimary: '',
  colorSecondary: colors.blue[500],

  // UI
  appBg: colors.grey[25],
  appContentBg: colors.grey[25],
  appBorderColor: colors.grey[50],
  appBorderRadius: 0,

  // Typography
  fontBase: type.family,
  fontCode: 'monospace',

  // Text colors
  // textColor: '',
  // textInverseColor: '',

  // Toolbar default and active colors
  // barTextColor: '',
  // barSelectedColor: '',
  barBg: colors.grey[25],

  // Form colors
  // inputBg: '',
  // inputBorder: '',
  // inputTextColor: '',
  // inputBorderRadius: 0,

  brandTitle: 'Wuki UI',
  brandUrl: 'https://github.com/melishev/wuki',
  brandImage: 'https://raw.githubusercontent.com/melishev/wuki/master/.github/assets/logo.svg',
});

addons.setConfig({
  showPanel: false,
  theme: customTheme,
  initialActive: 'sidebar',
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: true },
    eject: { hidden: false },
    copy: { hidden: true },
    fullscreen: { hidden: true },
  },
});
