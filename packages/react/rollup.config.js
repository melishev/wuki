/* eslint-disable import/no-extraneous-dependencies */
// https://github.com/rollup/plugins/tree/master/packages/node-resolve
import resolve from 'rollup-plugin-node-resolve';
// https://github.com/rollup/plugins/tree/master/packages/commonjs
import commonjs from '@rollup/plugin-commonjs';
// https://github.com/rollup/plugins/tree/master/packages/babel
import { babel } from '@rollup/plugin-babel';

// eslint-disable-next-line import/no-relative-packages
import { input, output, plugins } from '../../rollup.config';

const extensions = ['.js', '.jsx'];

export default [
  {
    input,
    output,
    plugins: [
      resolve({
        extensions,
      }),
      commonjs(),
      babel({
        babelrc: false,
        exclude: /node_modules/,
        extensions,
        presets: ['@babel/preset-env', '@babel/preset-react'],
        babelHelpers: 'bundled',
      }),
      ...plugins,
    ],
    external: [
      'react',
      'prop-types',
      '@wuki-ui/css',
      '@wuki-ui/theme',
      '@wuki-ui/utils',
    ],
  },
];
