import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

const config = {
  input: 'src/index.js',
  output: {
    format: 'umd',
    name: 'bondage.js',
  },
  plugins: [
    babel({ exclude: 'node_modules/**' }),
    terser(),
  ],
};
export default config;
