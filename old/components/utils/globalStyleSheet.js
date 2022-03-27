import { createUseStyles } from 'react-jss';

export default function style(theme) {
  return createUseStyles({
    '@global': {
      '*': {
        boxSizing: 'border-box',
      },
      html: {
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      },
      body: {
        fontFamily: theme.type.family,
      },
    },
  });
}
