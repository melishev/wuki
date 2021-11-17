import { createUseStyles } from 'react-jss';

const styles = createUseStyles((theme) => ({
  row: {
    display: 'grid',
    gridTemplateColumns: `repeat(${theme.grid.col}, 1fr)`,
    gap: theme.grid.gap,
    padding: {
      right: theme.grid.margin,
      left: theme.grid.margin,
    },
  },
}));

export default styles;
