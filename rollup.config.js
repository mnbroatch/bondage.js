import babel from '@rollup/plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

const config = [
  {
    input: 'index.js',
    output: {
      file: 'dist/bondage.js',
      format: 'umd',
      name: 'bondage.js',
    },
    plugins: [
      babel({ exclude: [] }),
      commonjs(),
    ],
  },
  {
    input: 'index.js',
    output: {
      file: 'dist/bondage.min.js',
      format: 'umd',
      name: 'bondage.js',
    },
    plugins: [
      babel({ exclude: [] }),
      commonjs(),
      terser(),
    ],
  },
];
export default config;
