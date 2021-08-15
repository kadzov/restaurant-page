const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index/index.js',
  output: { clean: true },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
  module: { rules: [{ test: /\.jpg$/, type: 'asset/resource' }] }
};
