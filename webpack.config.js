module.exports = [
  {
    entry: './src/index.js',
    output: {
      filename: 'bondage.min.js',
      library: {
        name: 'bondage',
        type: 'umd',
      },
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
    },
    optimization: {
      minimize: false,
    },
  },
];
