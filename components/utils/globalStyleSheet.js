import { createUseStyles } from 'react-jss';

import '@fontsource/manrope/200.css';
import '@fontsource/manrope/300.css';
import '@fontsource/manrope/400.css';
import '@fontsource/manrope/500.css';
import '@fontsource/manrope/600.css';
import '@fontsource/manrope/700.css';
import '@fontsource/manrope/800.css';

export default function style(theme) {
  return createUseStyles({
    '@global': {
      '*': {
        boxSizing: 'border-box',
      },
      body: {
        fontFamily: theme.type.family,
      },
    },
  });
}
