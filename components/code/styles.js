import { createUseStyles } from 'react-jss';
import { createGenerateId } from '../utils/helpers';

const useStyles = createUseStyles(({ type }) => ({
  code: {
    // Под сомнением
    cursor: 'text',
    //
    display: 'block',
    whiteSpace: 'pre',
    padding: '1rem',
    border: '1px solid #E5E5E5',
    borderRadius: 10,
    color: '#1D1D1F',
    font: '400 .9rem IBM Plex Mono',
    position: 'relative',
    '& button': {
      // не уверен
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      //
      width: '2rem',
      height: '2rem',
      border: '1px solid #E5E5E5',
      borderRadius: 6,
      // перебивает дефолтные стили кнопки
      background: 'unset',
      padding: 0,
      //
      position: 'absolute',
      top: '1rem',
      right: '1rem',
      stroke: '#E5E5E5',
      '& svg': {
        stroke: 'inherit',
      },
      '&:hover': {
        borderColor: '#6D6D6D',
        stroke: '#6D6D6D',
      },
      '&:active': {
        borderColor: '#FFB45B',
        stroke: '#FFB45B',
      },
    },
  },
}),
{ generateId: createGenerateId() });

export default useStyles;
