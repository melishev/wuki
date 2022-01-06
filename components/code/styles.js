import { createUseStyles } from 'react-jss';
import { createGenerateId } from '../utils/helpers';

const useStyles = createUseStyles(
  ({ colors }) => {
    const globalCSS = {
      background: 'white',
      border: `1px solid ${colors.grey[200]}`,
      font: '400 .9rem IBM Plex Mono',
      color: colors.grey[900],
    };
    return {
      codeInline: {
        ...globalCSS,
        display: 'inline-block',
        padding: 'calc(0.25rem - 1px) calc(.75rem - 1px)',
        borderRadius: 6,
        cursor: 'copy',
        '&:hover': {
          borderColor: colors.grey[500],
        },
        '&.active': {
          borderColor: colors.orange[500],
        },
      },
      code: {
        ...globalCSS,
        padding: 'calc(1rem - 1px)',
        borderRadius: 10,
        overflow: 'auto',
        '&.active': {
          '& button': {
            borderColor: colors.orange[500],
            stroke: colors.orange[500],
          },
        },
        '& button': {
          display: 'flex',
          background: 'white',
          border: `1px solid ${colors.grey[200]}`,
          borderRadius: 6,
          padding: 'calc(1rem - 10px - 1px)',
          position: 'sticky',
          float: 'right',
          left: 'calc(100% - 2rem)',
          stroke: colors.grey[200],
          cursor: 'pointer',
          '& svg': {
            stroke: 'inherit',
          },
          '&:hover': {
            borderColor: colors.grey[500],
            stroke: colors.grey[500],
          },
        },
        '& code': {
          marginRight: '3rem',
        },
      },
    };
  },
  { generateId: createGenerateId() },
);

export default useStyles;