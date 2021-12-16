import { createUseStyles } from 'react-jss';
import { createGenerateId } from '../utils/helpers';

const colors = {
  gray1: '#E5E5E5',
  gray2: '#6D6D6D',
  gray3: '#1D1D1F',
  orange1: '#FFB45B',
};

const useStyles = createUseStyles({
  code: {
    display: 'block',
    whiteSpace: 'pre',
    padding: 'calc(1rem - 1px)',
    border: `1px solid ${colors.gray1}`,
    borderRadius: 10,
    color: colors.gray3,
    font: '400 .9rem IBM Plex Mono',
    overflow: 'auto',
    '& button': {
      // не уверен
      display: 'flex',
      // placeItems: 'center',
      cursor: 'pointer',
      //
      // width: '2rem',
      // height: '2rem',
      border: `1px solid ${colors.gray1}`,
      // border: 'unset',
      // outline: `1px solid ${colors.gray1}`,
      borderRadius: 6,
      // перебивает дефолтные стили кнопки
      background: 'unset',
      // padding: 0,
      padding: 'calc(1rem - 10px - 1px)', // 10 - половина ширины и высоты иконки, 1 - из-за бордера
      //
      position: 'sticky',
      float: 'right',
      left: 'calc(100% - 2rem)',
      stroke: colors.gray1,
      '& svg': {
        stroke: 'inherit',
      },
      '&:hover': {
        borderColor: colors.gray2,
        stroke: colors.gray2,
      },
      '&.active': {
        borderColor: colors.orange1,
        stroke: colors.orange1,
      },
    },
  },
},
{ generateId: createGenerateId() });

export default useStyles;
