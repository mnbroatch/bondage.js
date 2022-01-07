import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

const config = [
  {
    input: 'index.js',
    output: {
      file: 'dist/bondage.umd.js',
      format: 'iife',
      name: 'bondage',
    },
    plugins: [
      commonjs(),
      babel({ exclude: 'node_modules/**' }),
    ],
  },
  {
    input: 'index.js',
    output: {
      file: 'dist/bondage.umd.min.js',
      format: 'iife',
      name: 'bondage',
    },
    plugins: [
      commonjs(),
      babel({ exclude: 'node_modules/**' }),
      terser(),
    ],
  },
];
export default config;
