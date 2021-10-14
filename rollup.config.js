/* eslint-disable arrow-body-style */
import fs from 'fs-extra';
import path from 'path';

import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const plugins = [
  babel({
    exclude: 'node_modules/**',
    extensions: ['.js', '.jsx'],
    presets: ['@babel/preset-env', '@babel/preset-react'],
  }),
  commonjs(),
  nodeResolve(),
  peerDepsExternal(),
];

export default (async () => {
  const componentsPath = path.join(__dirname, 'components');

  await fs.remove(path.join(__dirname, 'dist'));
  const files = await fs.readdir(componentsPath);

  const components = await Promise.all(
    files.map(async (name) => {
      const comPath = path.join(componentsPath, name);
      const pathJSX = path.join(comPath, 'index.jsx');

      const stat = await fs.stat(comPath);
      if (!stat.isDirectory()) return null;

      const hasFile = await fs.pathExists(pathJSX);
      if (!hasFile) return null;

      return { name, jsx: pathJSX };
    }),
  );

  return [
    ...components.map(({ name, jsx }) => ({
      input: { [name]: jsx },
      output: [
        {
          format: 'cjs',
          exports: 'named',
          entryFileNames: '[name]/index.js',
          assetFileNames: '[name]',
          dir: 'dist',
          sourcemap: true,
        },
        // {
        //   format: 'esm',
        //   exports: 'named',
        //   entryFileNames: '[name]/index.esm.js',
        //   dir: 'dist',
        //   sourcemap: true,
        // },
      ],
      plugins: [
        ...plugins,
        postcss({
          // extract: `${name}/index.css`,
          minimize: true,
          // sourceMap: true,
          // modules: true,
        }),
      ],
    })),
    // {
    //   input: { index: path.join(componentsPath, 'index.ts') },
    //   output: [
    //     {
    //       format: 'cjs',
    //       exports: 'named',
    //       dir: 'dist',
    //       entryFileNames: 'index.js',
    //     },
    //   ],
    //   plugins,
    // },
  ];
});
