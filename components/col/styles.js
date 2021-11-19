/* eslint-disable no-restricted-syntax */
import { createUseStyles, jss } from 'react-jss';

// Фрагмент задает правило генерации названия класса
const createGenerateId = () => (rule) => rule.key;
jss.setup({ createGenerateId });

const styles = createUseStyles((theme) => {
  // На основе переданного BreakPoint,
  // проходит по всем колонкам и в
  // зависимости от bp возвращает объект стилей.
  function colGenerate(bpKey, bpValue) {
    const arrCol = [...Array(theme.grid.col).keys()];

    return arrCol.reduce((acc, curr) => {
      let className;
      let mediaQuery;

      if (bpKey === 'xs') {
        className = `col-${curr + 1}`;
        mediaQuery = '&';
      } else {
        className = `col-${bpKey}-${curr + 1}`;
        mediaQuery = `@media (min-width: ${bpValue}px)`;
      }

      // Создаем класс с медиа-запросом и свойствами
      acc[className] = {
        [mediaQuery]: {
          gridColumn: `auto/span ${curr + 1}`,
        },
      };
      return acc;
    }, {});
  }

  // Создает цикл, при каждой итерации
  // вызывается функция возвращающая
  // обьект классов для определенного BreakPoint
  function colBreakPoints() {
    let a = {};
    for (const [bpKey, bpValue] of Object.entries(theme.grid.breakPoints)) {
      a = { ...a, ...colGenerate(bpKey, bpValue) };
    }
    return a;
  }

  // Возвращает объект классов отступов
  // для каждого размера колонки
  function colOffset() {
    const arrCol = [...Array(theme.grid.col).keys()];

    return arrCol.reduce((acc, curr) => {
      acc[`col-offset-${curr + 1}`] = {
        gridColumnStart: curr + 1,
      };
      return acc;
    }, {});
  }

  return { ...colBreakPoints(), ...colOffset() };
});

export default styles;
