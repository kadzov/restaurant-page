const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index/index.js',
    home: './src/home/home.js',
    menu: './src/menu/menu.js',
    location: './src/location/location.js'
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
      template: './src/index.html'
    })
  ],
  output: {
    clean: true
  }
};
