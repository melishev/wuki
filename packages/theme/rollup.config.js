/* eslint-disable import/no-extraneous-dependencies */
// https://github.com/rollup/plugins/tree/master/packages/babel
import { babel } from '@rollup/plugin-babel';

// eslint-disable-next-line import/no-relative-packages
import { input, output, plugins } from '../../rollup.config';

const extensions = ['.js'];

export default [
  {
    input,
    output,
    plugins: [
      babel({
        babelrc: false,
        exclude: /node_modules/,
        extensions,
        babelHelpers: 'bundled',
      }),
      ...plugins,
    ],
  },
];
