import { addons } from '@storybook/addons';
import themeCustom from './themeCustom';

addons.setConfig({
  showPanel: false,
  theme: themeCustom,
  initialActive: 'sidebar',
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: true },
    eject: { hidden: false },
    copy: { hidden: true },
    fullscreen: { hidden: true },
  },
});
