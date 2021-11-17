import { createUseStyles, jss } from 'react-jss';

const styles = createUseStyles((theme) => {
  // Фрагмент задает правило генерации названия класса
  const createGenerateId = () => (rule) => `${rule.key}`;
  jss.setup({ createGenerateId });

  // Возвращает объект классов для колонки в заданном BreakPoint
  const colGenerate = (colPrefix) => {
    const arrCol = [...Array(theme.grid.col).keys()];

    return arrCol.reduce((acc, curr) => {
      acc[`col-${colPrefix}-${curr + 1}`] = {
        gridColumn: `auto/span ${curr + 1}`,
      };
      return acc;
    }, {});
  };

  // Возвращает обьект классов ВСЕХ BreakPoints заданных в теме.
  function mixColGenerate() {
    let a = {};
    Object.keys(theme.grid.breakPoints).forEach((key) => {
      a = {
        ...a,
        ...colGenerate(key),
      };
    });
    return a;
  }

  return mixColGenerate();
});

export default styles;
