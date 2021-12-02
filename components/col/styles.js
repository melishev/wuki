/* eslint-disable no-restricted-syntax */
import { createUseStyles } from 'react-jss';
import { createGenerateId } from '../utils/helpers';

const useStyles = createUseStyles(
  ({ grid }) => {
    const { col, breakPoints } = grid;

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

      return themeCol.reduce((acc, curr) => {
        const className = `col-${breakPointKey}-${curr + 1}`;
        const mediaQuery = (breakPointKey === 'xs') ? '&' : `@media (min-width: ${breakPointValue}px)`;

        acc[className] = {
          [mediaQuery]: {
            gridColumn: `auto/span ${curr + 1}`,
          },
        };
        return acc;
      }, {});
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
      let a = {};
      for (const breakPoint of Object.entries(breakPoints)) {
        a = { ...a, ...colGenerate(breakPoint) };
      }
      return a;
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
        acc[`col-offset-${curr + 1}`] = {
          gridColumnStart: curr + 1,
        };
        return acc;
      }, {});
    }

    return {
      ...colBreakPoints(),
      ...colOffset(),
    };
  },
  { generateId: createGenerateId() },
);

export default useStyles;
