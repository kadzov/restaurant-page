const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    hot: true,
  },
  output: {
    filename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        generator: {
          filename: 'assets/[name][ext]',
        },
      },
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
});
