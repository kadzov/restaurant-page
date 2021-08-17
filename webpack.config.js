const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  output: { clean: true },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
  module: {
    rules: [
      { test: /\.scss/, use: ['css-loader', 'sass-loader'] },
      { test: /\.jpg/, type: 'asset/resource' }
    ]
  }
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    devServer = { hot: true };
    config.module.rules[0].use.unshift('style-loader');
  }
  if (argv.mode === 'production') {
    config.optimization = { splitChunks: { chunks: 'all' } };
    config.output.filename = '[contenthash].js';
    config.plugins.push
      (new MiniCssExtractPlugin({ filename: '[contenthash].css' }));
    config.module.rules[0].use.unshift(MiniCssExtractPlugin.loader);
  }
  return config;
};
