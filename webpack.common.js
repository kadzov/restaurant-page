const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './index/index.js',
    home: './home/home.js',
    menu: './menu/menu.js',
    location: './location/location.js'
  },
  module: {
    rules: [
      {
        test: /\.jpg$/,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  context: __dirname + '/src',
  output: {
    clean: true
  }
};
