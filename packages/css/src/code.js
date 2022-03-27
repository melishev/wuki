import { useJss } from '@wuki-ui/utils';

const key = { meta: 'code' };

export default ({ colors }) => {
  const globalCSS = {
    background: 'white',
    border: `1px solid ${colors.grey[50]}`,
    font: '400 .9rem IBM Plex Mono',
    color: colors.grey[900],
    margin: 0,
  };
  return useJss({
    codeInline: {
      ...globalCSS,
      display: 'inline-block',
      padding: 'calc(0.25rem - 1px) calc(.75rem - 1px)',
      borderRadius: 6,
      cursor: 'copy',
      '&:hover': {
        borderColor: colors.grey[200],
      },
      '&.active': {
        borderColor: colors.other.green,
      },
    },
    code: {
      ...globalCSS,
      padding: 'calc(1rem - 1px)',
      borderRadius: 10,
      overflow: 'auto',
      '&.active': {
        '& button': {
          borderColor: colors.other.green,
          stroke: colors.other.green,
        },
      },
      '& button': {
        display: 'flex',
        background: 'white',
        border: `1px solid ${colors.grey[50]}`,
        borderRadius: 6,
        padding: 'calc(1rem - 10px - 1px)',
        position: 'sticky',
        float: 'right',
        left: 'calc(100% - 2rem)',
        stroke: colors.grey[50],
        cursor: 'pointer',
        '& svg': {
          stroke: 'inherit',
        },
        '&:hover': {
          borderColor: colors.grey[200],
          stroke: colors.grey[200],
        },
      },
      '& code': {
        font: 'inherit',
        marginRight: '3rem',
      },
    },
  }, key);
};
