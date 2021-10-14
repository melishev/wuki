// import fs from 'fs-extra';
// import path from 'path';

import copy from 'rollup-plugin-copy';
import autoprefixer from 'autoprefixer';
import babel from 'rollup-plugin-babel';
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
  copy({
    targets: [
      { src: 'components/index.js', dest: 'dist' },
      { src: 'assets/fonts/**/*.woff2', dest: 'dist/assets/fonts' },
    ],
    verbose: true,
    copyOnce: true,
  }),
  babel({
    exclude: 'node_modules/**',
    extensions,
    presets: ['@babel/preset-env', '@babel/preset-react'],
  }),
  cleaner({
    targets: [
      './dist/',
    ],
  }),
  postcss({
    minimize: true,
    plugins: [
      autoprefixer,
    ],
  }),
  commonjs(),
  nodeResolve({
    extensions,
  }),
  peerDepsExternal(),
  terser(),
  analyze({
    summaryOnly: true,
  }),
];

export default
[
  {
    input: ['components/**/index.jsx'],
    output: {
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      dir: 'dist',
    },
    plugins: [
      ...plugins,
      multiInput({ relative: ['components/'] }),
    ],
  },
];

// export default (async () => {
//   const componentsPath = path.join(__dirname, 'components');

//   await fs.remove(path.join(__dirname, 'dist'));
//   const files = await fs.readdir(componentsPath);

//   const components = await Promise.all(
//     files.map(async (name) => {
//       const comPath = path.join(componentsPath, name);
//       const pathJSX = path.join(comPath, 'index.jsx');

//       const stat = await fs.stat(comPath);
//       if (!stat.isDirectory()) return null;

//       const hasFile = await fs.pathExists(pathJSX);
//       if (!hasFile) return null;

//       return { name, jsx: pathJSX };
//     }),
//   );

//   return [
//     ...components
//       .filter((r) => r)
//       .map(({ name, jsx }) => ({
//         input: { [name]: jsx },
//         output: [
//           {
//             format: 'cjs',
//             exports: 'named',
//             entryFileNames: '[name]/index.js',
//             assetFileNames: '[name]',
//             dir: 'dist',
//             sourcemap: true,
//           },
//         ],
//         plugins: [
//           ...plugins,
//         ],
//       })),
//   ];
// });
