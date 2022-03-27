import { createUseStyles } from 'react-jss';
import { createGenerateId } from '../utils/helpers';

const useStyles = createUseStyles(
  ({ type, grid }) => {
    const { variants } = type;
    const { breakPoints } = grid;

    /**
     * - EN
     * Receives one of the options and generates styles for it
     * - RU
     * Получает один из вариантов и генерирует для него стили
     * @param {object} - All available variation properties with BreakPoint / Все доступные свойства вариации вместе с BreakPoint
     * @returns {object} - Returns the styles object for the variation / Возвращает объект стилей для вариации
     */
    const genFontStyle = ({ breakPoints: variantBreakPoints, ...props }) => {
      let genBreakPoints = {};
      if (variantBreakPoints) {
        genBreakPoints = Object.entries(variantBreakPoints).reduce((acc, [currName, currValue]) => {
          acc[`@media (min-width: ${breakPoints[currName]}px)`] = currValue;
          return acc;
        }, {});
      }
      return {
        ...props,
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
