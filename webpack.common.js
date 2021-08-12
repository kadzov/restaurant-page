const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname + '/src/js',
  entry: {
    index: './index.js',
    home: './home.js',
    menu: './menu.js',
    location: './location.js',
  },
  output: {
    path: __dirname + '/dist',
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.scss', '.jpg'],
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
      template: '../template.html',
    }),
  ],
};
