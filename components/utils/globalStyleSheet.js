import { createUseStyles } from 'react-jss';

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
