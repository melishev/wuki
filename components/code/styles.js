import { createUseStyles } from 'react-jss';
import { createGenerateId } from '../utils/helpers';

const colors = {
  gray1: '#E5E5E5',
  gray2: '#6D6D6D',
  gray3: '#1D1D1F',
  orange1: '#FFB45B',
};

const globalCSS = {
  background: 'white',
  border: `1px solid ${colors.gray1}`,
  font: '400 .9rem IBM Plex Mono',
  color: colors.gray3,
};

const useStyles = createUseStyles({
  codeInline: {
    ...globalCSS,
    display: 'inline-block',
    padding: 'calc(0.25rem - 1px) calc(.75rem - 1px)',
    borderRadius: 6,
    cursor: 'copy',
    '&:hover': {
      borderColor: colors.gray2,
    },
    '&.active': {
      borderColor: colors.orange1,
    },
  },
  code: {
    ...globalCSS,
    padding: 'calc(1rem - 1px)',
    borderRadius: 10,
    overflow: 'auto',
    '&.active': {
      '& button': {
        borderColor: colors.orange1,
        stroke: colors.orange1,
      },
    },
    '& button': {
      display: 'flex',
      background: 'white',
      border: `1px solid ${colors.gray1}`,
      borderRadius: 6,
      padding: 'calc(1rem - 10px - 1px)',
      position: 'sticky',
      float: 'right',
      left: 'calc(100% - 2rem)',
      stroke: colors.gray1,
      cursor: 'pointer',
      '& svg': {
        stroke: 'inherit',
      },
      '&:hover': {
        borderColor: colors.gray2,
        stroke: colors.gray2,
      },
    },
    '& code': {
      marginRight: '3rem',
    },
  },
},
{ generateId: createGenerateId() });

export default useStyles;
