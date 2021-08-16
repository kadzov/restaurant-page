const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: { clean: true },
  plugins: [new HtmlWebpackPlugin()],
  module: { rules: [{ test: /\.jpg$/, type: 'asset/resource' }] }
};
//{ template: './src/index.html' }
