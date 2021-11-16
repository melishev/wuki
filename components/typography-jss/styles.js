import { createUseStyles } from 'react-jss';

const styles = createUseStyles((theme) => {
  // Конфигурации выходящих стилей
  function fontGen({ size, weight, height }) {
    return {
      font: {
        family: theme.type.family,
        size,
        weight,
      },
      lineHeight: height,
    };
  }

  // Функция генерирует стили типографики
  function mixVariants(variants) {
    return Object.keys(variants).reduce((acc, curr) => {
      acc[curr] = fontGen(variants[curr]);
      return acc;
    }, {});
  }

  return {
    ...mixVariants(theme.type.variants),
  };
});

export default styles;
