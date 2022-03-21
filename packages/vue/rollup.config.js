/* eslint-disable import/no-extraneous-dependencies */
// https://github.com/rollup/plugins/tree/master/packages/node-resolve
import resolve from 'rollup-plugin-node-resolve';
// https://github.com/rollup/plugins/tree/master/packages/commonjs
import commonjs from '@rollup/plugin-commonjs';
// https://github.com/rollup/plugins/tree/master/packages/babel
import { babel } from '@rollup/plugin-babel';

// eslint-disable-next-line import/no-relative-packages
import { output, plugins } from '../../rollup.config';

const extensions = ['.js', '.jsx'];

export default [
  {
    input: 'index.js',
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
        plugins: ['@vue/babel-plugin-jsx'],
        babelHelpers: 'bundled',
      }),
      ...plugins,
    ],
    external: [
      'vue',
      '@wuki-ui/css',
      '@wuki-ui/theme',
      '@wuki-ui/utils',
    ],
  },
];
