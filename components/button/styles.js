import { createUseStyles } from 'react-jss';
import { createGenerateId } from '../utils/helpers';

// eslint-disable-next-line no-unused-vars
const useStyles = createUseStyles(({ type, grid }) => ({
  btn: {
    '&-large': {
      color: 'white',
      background: '#0071E3',
      padding: '12px 32px',
      border: 'unset',
      borderRadius: 8,
      cursor: 'pointer',
      '&:hover': {
        background: '#0A85FF',
      },
      '&:active': {
        background: '#0066CC',
      },
      '& svg': {
        verticalAlign: 'sub',
      },
    },
    '&-medium': {
      color: 'white',
      background: '#0071E3',
      padding: '8px 24px',
      border: 'unset',
      borderRadius: 4,
      cursor: 'pointer',
    },
    '&-small': {
      color: 'white',
      background: '#0071E3',
      padding: '4px 20px',
      border: 'unset',
      borderRadius: 4,
      cursor: 'pointer',
    },
    '&-mini': {
      color: 'white',
      background: '#0071E3',
      padding: '4px 16px',
      border: 'unset',
      borderRadius: 4,
      cursor: 'pointer',
    },
  },
}),
{ generateId: createGenerateId() });

export default useStyles;
