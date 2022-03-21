import { useJss } from '@wuki-ui/utils';

const key = { meta: 'text' };

export default ({ type, grid }) => {
  const { variants } = type;
  const { breakPoints } = grid;

  /**
   * - EN
   * Receives one of the options and generates styles for it
   * - RU
   * Получает один из вариантов и генерирует для него стили
   * @param {object} - All available variation properties with BreakPoint
   * / Все доступные свойства вариации вместе с BreakPoint
   * @returns {object} - Returns the styles object for the variation
   * / Возвращает объект стилей для вариации
   */
  const genFontStyle = ({ breakPoints: variantBreakPoints, ...props }) => {
    if (Object.keys(variantBreakPoints).length) {
      const genBreakPoints = Object.entries(variantBreakPoints).reduce((acc, [key, value]) => {
        acc[`@media (min-width: ${breakPoints[key]}px)`] = value;
        return acc;
      }, {});
      return {
        ...props,
        ...genBreakPoints,
      };
    }
    return {
      ...props,
    };
  };

  /**
   * - EN
   * Loops through all declared variations
   * - RU
   * Проходит по всем объявленным вариациям
   * @returns {object} - Returns the final styles object
   * / Возвращает конечный объект стилей
   */
  function genVariants() {
    return Object.keys(variants).reduce((acc, curr) => {
      acc[curr] = genFontStyle(variants[curr]);
      return acc;
    }, {});
  }

  return useJss({
    ...genVariants(),
  }, key);
};
