import copy from 'rollup-plugin-copy';
import autoprefixer from 'autoprefixer';
import babel from 'rollup-plugin-babel';
import cleaner from 'rollup-plugin-cleaner';
import postcss from 'rollup-plugin-postcss';
import analyze from 'rollup-plugin-analyzer';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import multiInput from 'rollup-plugin-multi-input';

const extensions = ['.js', '.jsx'];

const plugins = [
  copy({
    targets: [{ src: 'components/index.js', dest: 'dist' }],
    verbose: true,
    copyOnce: true,
  }),
  babel({
    exclude: 'node_modules/**',
    extensions,
    presets: ['@babel/preset-env', '@babel/preset-react'],
  }),
  cleaner({
    targets: ['./dist/'],
  }),
  postcss({
    minimize: true,
    plugins: [autoprefixer],
  }),
  commonjs(),
  nodeResolve({
    extensions,
  }),
  peerDepsExternal(),
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
        dir: 'dist',
      },
    ],
    plugins: [...plugins, multiInput({ relative: 'components/' })],
  },
];
