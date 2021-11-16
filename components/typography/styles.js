import { createUseStyles, jss } from 'react-jss';

const styles = createUseStyles((theme) => {
  // Фрагмент задает правило генерации названия класса
  const createGenerateId = () => (rule) => `type-${rule.key}`;
  jss.setup({ createGenerateId });

  // Конфигурации выходящих стилей
  const fontGen = ({ size, weight, height }) => ({
    font: {
      family: theme.type.family,
      size,
      weight,
    },
    lineHeight: height,
  });

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
