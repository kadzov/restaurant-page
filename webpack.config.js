const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  entry: './src/index.ts',
  output: { clean: true },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
  module: {
    rules: [
      { test: /\.jpg/, type: 'asset/resource' },
      { test: /\.scss/, use: ['css-loader', 'sass-loader'] },
      { test: /\.ts/, use: 'ts-loader' }
    ]
  }
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devServer = { hot: true };
    config.module.rules[1].use.unshift('style-loader');
  } else {
    config.optimization = { splitChunks: { chunks: 'all' } };
    config.output.filename = '[contenthash].js';
    config.plugins.push
      (new MiniCssExtractPlugin({ filename: '[contenthash].css' }));
    config.module.rules[1].use.unshift(MiniCssExtractPlugin.loader);
  } return config;
};
