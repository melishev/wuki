import { createUseStyles, jss } from 'react-jss';

// Фрагмент задает правило генерации названия класса
const createGenerateId = () => (rule) => rule.key;
jss.setup({ createGenerateId });

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
