import { useJss } from '@wuki-ui/utils';

const key = { meta: 'provider' };

/** Global selectors */
export default ({ type }) => useJss({
  '@global': {
    '*': {
      boxSizing: 'border-box',
    },
    html: {
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
    },
    body: {
      fontFamily: type.family,
    },
  },
}, key);
