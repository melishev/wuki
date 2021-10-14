/* eslint-disable arrow-body-style */
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import localResolve from 'rollup-plugin-local-resolve';
import postcss from 'rollup-plugin-postcss';

import fs from 'fs-extra';
import path from 'path';

const componentsPath = path.join(__dirname, 'components');

const plugins = [
  babel({
    exclude: 'node_modules/**',
    extensions: ['.js', '.jsx'],
    presets: ['@babel/preset-env', '@babel/preset-react'],
  }),
  peerDepsExternal(),
  commonjs(),
  nodeResolve(),
  localResolve(),
];

export default (async () => {
  const files = await fs.readdir(componentsPath);

  const components = await Promise.all(
    files.map(async (name) => {
      const comPath = path.join(componentsPath, name);
      const pathJSX = path.join(comPath, 'index.jsx');

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
          extract: `${name}/index.css`,
          minimize: true,
          modules: true,
        }),
      ],
    })),
  ];
});
