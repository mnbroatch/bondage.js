import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

const config = {
  input: 'index.js',
  output: {
    format: 'umd',
    name: 'bondage.min.js',
  },
  plugins: [
    babel({ exclude: 'node_modules/**' }),
    terser(),
  ],
};
export default config;
