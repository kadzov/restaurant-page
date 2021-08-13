const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './index/index',
    home: './home/home',
    menu: './menu/menu',
    location: './location/location'
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
      template: './index'
    })
  ],
  context: __dirname + '/src',
  resolve: {
    extensions: ['.jpg', '.js', '.scss', '.html']
  },
  output: {
    clean: true
  }
};
