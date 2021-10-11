import babel from 'rollup-plugin-babel';
import scss from 'rollup-plugin-scss';

export default {
  input: './components/general/button/button.jsx',
  output: {
    file: './build/bundle.js',
    format: 'iife',
    sourcemap: true,
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
      extensions: ['.js', '.jsx'],
      presets: ['@babel/preset-env', '@babel/preset-react'],
    }),
    scss(),
  ],
};
