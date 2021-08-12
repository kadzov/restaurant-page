const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './index',
    home: './home',
    menu: './menu',
    location: './location',
  },
  context: __dirname + '/src/js',
  resolve: {
    extensions: [
      '.jpg',
      '.js',
      '.scss',
      '.html',
    ],
  },
  output: {
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.jpg$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: '../index',
    }),
  ],
};
