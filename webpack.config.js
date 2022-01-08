module.exports = [
  {
    entry: './src/index.js',
    output: {
      filename: 'bondage.min.js',
      library: {
        name: 'bondage',
        type: 'umd',
      },
      globalObject: 'this',
    },
  },
  {
    entry: './src/index.js',
    output: {
      filename: 'bondage.js',
      library: {
        name: 'bondage',
        type: 'umd',
      },
      globalObject: 'this',
    },
    optimization: {
      minimize: false,
    },
  },
];
