import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const config = [
  {
    input: 'index.js',
    output: {
      file: 'dist/bondage.umd.js',
      format: 'umd',
      name: 'bondage.js',
    },
    plugins: [
      nodeResolve(),
      commonjs(),
      json(),
      babel({ exclude: 'node_modules/**' }),
    ],
  },
  {
    input: 'index.js',
    output: {
      file: 'dist/bondage.umd.min.js',
      format: 'umd',
      name: 'bondage.js',
    },
    plugins: [
      nodeResolve(),
      commonjs(),
      json(),
      babel({ exclude: 'node_modules/**' }),
      terser(),
    ],
  },
];
export default config;
