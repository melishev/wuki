import { useJss } from '@wuki-ui/utils';

const key = { meta: 'grid' };

export default ({ grid }) => {
  const {
    col, gap, margin, breakPoints,
  } = grid;

  /**
   * - EN
   * Based on the supplied BreakPoint,
   * traverses all the columns and
   * returns a styles object.
   * - RU
   * На основе переданного BreakPoint,
   * проходит по всем колонкам и
   * возвращает объект стилей.
   */
  function colGenerate([breakPointKey, breakPointValue]) {
    const themeCol = [...Array(col).keys()];

    const genCol = themeCol.reduce((acc, curr) => {
      const className = `col-${breakPointKey}-${curr + 1}`;

      acc[className] = {
        width: '100%', // necessary for FireFox
        gridColumn: `auto/span ${curr + 1}`,
      };
      return acc;
    }, {});

    if (breakPointKey !== 'xs') {
      return {
        [`@media (min-width: ${breakPointValue}px)`]: genCol,
      };
    }
    return genCol;
  }

  /**
   * - EN
   * Creates a loop, with each iteration a function
   * is called that returns an object of classes
   * for a specific BreakPoint
   * - RU
   * Создает цикл, при каждой итерации
   * вызывается функция возвращающая
   * объект классов для определенного BreakPoint
   */
  function colBreakPoints() {
    return Object.entries(breakPoints).reduce((acc, breakPoint) => ({
      ...acc,
      ...colGenerate(breakPoint),
    }), {});
  }

  /**
   * - EN
   * Returns an object of the indentation
   * classes for each column size
   * - RU
   * Возвращает объект классов отступов
   * для каждого размера колонки
   */
  function colOffset() {
    const themeCol = [...Array(col).keys()];

    return themeCol.reduce((acc, curr) => {
      acc[`offset-${curr + 1}`] = {
        gridColumnStart: curr + 1,
      };
      return acc;
    }, {});
  }

  /**
   * - EN
   * Returns the styles for the Grid Container
   * - RU
   * Возвращает стили для Grid Container
   * @returns {object}
   */
  function gridContainer() {
    return {
      con: {
        display: 'grid',
        gridTemplateColumns: `repeat(${col}, 1fr)`,
        gap,
        padding: `0 ${margin}px`,
      },
    };
  }

  return useJss({
    ...colBreakPoints(),
    ...colOffset(),
    ...gridContainer(),
  }, key);
};
