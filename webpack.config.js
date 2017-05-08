var path = require('path');
var SRC_DIR = path.join(__dirname, '/Client/src');
var DIST_DIR = path.join(__dirname, '/Client/dist');

module.exports = {
  devtool: 'source-map',
  entry: `${SRC_DIR}/index.js`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx']
  }
}