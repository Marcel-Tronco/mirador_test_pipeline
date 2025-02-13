const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'MiradorBundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: { fallback: { url: require.resolve("url") } }
};
