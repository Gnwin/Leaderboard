const path = require('path');

module.exports = {
  entry: './src/assets/js/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};