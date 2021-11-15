import { createUseStyles } from 'react-jss';
// import '../config';

// Using `theme` function is better when you have many theme dependant styles.
// Note that in this case you don't need to use useTheme(), it subscribes to the them automatically
// const useStylesFromThemeFunction = createUseStyles((theme) => ({
//   button: {
//     background: theme.colorPrimary,
//   },
//   label: {
//     fontWeight: 'bold',
//   },
// }));

// // Using function values might be better if you have only few theme dependant styles
// // and also props or state is used for other values.
// const useStyles = createUseStyles({
//   button: {
//     background: ({  theme }) => theme.colorPrimary,
//   },
//   label: {
//     fontWeight: 'bold',
//   },
// });

// Конфигурации выходящих стилей
function fontGen({ size, weight, height }) {
  return {
    // font: {
    //   family: type.fontFamily,
    //   size,
    //   weight,
    // },
    // lineHeight: height,
  };
}

// Функция генерирует стили заголовков
function heading(theme) {
  console.log('тема', theme);
  // return Object.keys(type.heading).reduce((acc, curr) => {
  //   acc[`h${curr}`] = fontGen(type.heading[curr]);
  //   return acc;
  // }, {});
}

// Функция генерирует кастомные стили
// function custom() {
//   return Object.keys(type.heading).reduce((acc, curr) => {
//     acc[`h${curr}`] = fontGen(type.heading[curr]);
//     return acc;
//   }, {});
// }

const styles = createUseStyles({
  ...heading(),
  h1: {
    color: ({ theme }) => theme.colorPrimary,
  },
  // ...custom(),
});

export default styles;
