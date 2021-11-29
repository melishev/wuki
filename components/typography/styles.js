/* eslint-disable no-restricted-syntax */
import { createUseStyles } from 'react-jss';

/**
 * Фрагмент задает правило генерации названия класса
 */
const createGenerateId = () => (rule) => `wk-${rule.key}`;

const useStyles = createUseStyles(({ type, grid }) => {
  const { variants } = type;
  const { breakPoints } = grid;

  const fontStyle = (size, weight, height) => ({
    font: {
      size,
      weight,
    },
    lineHeight: height,
    margin: '0', // ???
  });

  // Конфигурации выходящих стилей
  const genFontStyle = ({ size, weight, height, breakPoints: bp }) => {
    const genbreakPoints = {};
    if (bp) {
      for (const [bpKey, bpValue] of Object.entries(bp)) {
        const { size: bpSize, weight: bpWeight, height: bpHeight } = bpValue;
        genbreakPoints[`@media (min-width: ${breakPoints[bpKey]}px)`] = fontStyle(bpSize, bpWeight, bpHeight);
      }
    }
    return {
      ...fontStyle(size, weight, height),
      ...genbreakPoints,
    };
  };

  // Функция генерирует стили типографики
  function genVariant() {
    return Object.keys(variants).reduce((acc, curr) => {
      acc[curr] = genFontStyle(variants[curr]);
      return acc;
    }, {});
  }

  return {
    ...genVariant(),
  };
},
{ generateId: createGenerateId() });

export default useStyles;
