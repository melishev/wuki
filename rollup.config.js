// import copy from 'rollup-plugin-copy';
import autoprefixer from 'autoprefixer';
import { babel } from '@rollup/plugin-babel';
import cleaner from 'rollup-plugin-cleaner';
import postcss from 'rollup-plugin-postcss';
import analyze from 'rollup-plugin-analyzer';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import multiInput from 'rollup-plugin-multi-input';

const extensions = ['.js', '.jsx'];

const plugins = [
  // copy({
  //   targets: [{ src: 'components/index.js', dest: 'dist' }],
  //   verbose: true,
  //   copyOnce: true,
  // }),
  commonjs(),
  babel({
    exclude: 'node_modules/**',
    extensions,
    presets: ['@babel/preset-env', '@babel/preset-react'],
  }),
  postcss({
    minimize: true,
    plugins: [autoprefixer],
  }),
  nodeResolve({
    extensions,
  }),
  peerDepsExternal(),
  terser(),
  analyze({
    summaryOnly: true,
  }),
];

export default [
  {
    input: ['components/**/index.jsx'],
    output: [
      {
        format: 'cjs',
        exports: 'named',
        dir: 'dist/cjs',
      },
    ],
    plugins: [
      ...plugins,
      multiInput({ relative: 'components/' }),
      cleaner({ targets: ['./dist/'] }),
    ],
  },
  {
    input: ['components/index.js'],
    output: [
      {
        format: 'esm',
        exports: 'named',
        dir: 'dist/es',
      },
    ],
    plugins,
  },
];
