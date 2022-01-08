module.exports = [
  {
    entry: './src/index.js',
    output: {
      filename: 'bondage.min.js',
    },
  },
  {
    entry: './src/index.js',
    output: {
      filename: 'bondage.js',
    },
    optimization: {
      minimize: false,
    },
  },
];
