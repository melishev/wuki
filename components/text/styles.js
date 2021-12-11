import { createUseStyles } from 'react-jss';
import { createGenerateId } from '../utils/helpers';

const useStyles = createUseStyles(
  ({ type, grid }) => {
    const { variants } = type;
    const { breakPoints } = grid;

    /**
     * - EN
     * Basic styles for typography
     * - RU
     * Базовые стили для типографики
     * @param {number} size
     * @param {(number|string)} weight
     * @param {number} height
     * @returns {object}
     */
    const baseTextStyle = (size, weight, height) => ({
      font: {
        size,
        weight,
      },
      lineHeight: height,
    });

    /**
     * - EN
     * Styles for the main element of typography
     * - RU
     * Стили для основного элемента типографики
     * @returns {object}
     */
    const mainTextStyle = () => ({
      margin: '0',
    });

    /**
     * - EN
     * Receives one of the options and generates styles for it
     * - RU
     * Получает один из вариантов и генерирует для него стили
     * @param {object} - All available variation properties with BreakPoint / Все доступные свойства вариации вместе с BreakPoint
     * @returns {object} - Returns the styles object for the variation / Возвращает объект стилей для вариации
     */
    const genFontStyle = ({ size, weight, height, breakPoints: variantBreakPoints }) => {
      let genBreakPoints = {};
      if (variantBreakPoints) {
        genBreakPoints = Object.entries(variantBreakPoints).reduce((acc, [currName, currValue]) => {
          acc[`@media (min-width: ${breakPoints[currName]}px)`] = baseTextStyle(currValue.size, currValue.weight, currValue.height);
          return acc;
        }, {});
      }
      return {
        ...{ ...baseTextStyle(size, weight, height), ...mainTextStyle() },
        ...genBreakPoints,
      };
    };

    /**
     * - EN
     * Loops through all declared variations
     * - RU
     * Проходится по всем объявленным вариациям
     * @returns {object} - Returns the final styles object / Возвращает конечный объект стилей
     */
    function genVariants() {
      const themeVariants = Object.keys(variants);

      return themeVariants.reduce((acc, curr) => {
        acc[curr] = genFontStyle(variants[curr]);
        return acc;
      }, {});
    }

    return {
      ...genVariants(),
    };
  },
  { generateId: createGenerateId() },
);

export default useStyles;
