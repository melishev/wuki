import { createUseStyles } from 'react-jss';
import { createGenerateId } from '../utils/helpers';

const useStyles = createUseStyles(
  ({ grid }) => {
    const { col, gap, margin } = grid;

    return {
      row: {
        display: 'grid',
        gridTemplateColumns: `repeat(${col}, 1fr)`,
        gap,
        padding: {
          right: margin,
          left: margin,
        },
      },
    };
  },
  { generateId: createGenerateId() },
);

export default useStyles;
