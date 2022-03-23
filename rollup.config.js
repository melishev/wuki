// https://github.com/TrySound/rollup-plugin-terser
import { terser } from 'rollup-plugin-terser';
// https://github.com/yingye/rollup-plugin-banner
import banner from 'rollup-plugin-banner';
// https://github.com/ritz078/rollup-plugin-filesize
import filesize from 'rollup-plugin-filesize';
// https://github.com/vladshcherbin/rollup-plugin-copy
import copy from 'rollup-plugin-copy'
// https://github.com/vladshcherbin/rollup-plugin-generate-package-json
import generatePackageJson from 'rollup-plugin-generate-package-json';

import { description, keywords, author, repository, bugs, license } from './package.json'

export const input = 'src/index.js'

export const output = {
  file: 'dist/src/index.js',
  exports: 'named',
}
  
export const plugins = [
  terser(),
  banner('<%= pkg.name %>\nv<%= pkg.version %>'),
  filesize(),
  copy({
    targets: [
      { src: '../../LICENSE', dest: 'dist' },
    ],
  }),
  generatePackageJson({
    outputFolder: 'dist',
    baseContents: (pkg) => ({
      name: pkg.name,
      version: pkg.version,
      description,
      keywords,
      main: pkg.main,
      homepage: '',
      author,
      repository,
      bugs,
      license,
    }),
  }),
]