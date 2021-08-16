const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  output: { clean: true },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
  module: {
    rules: [
      { test: /\.scss/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.jpg/, type: 'asset/resource' },
    ]
  }
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devServer = { hot: true };
  }
  if (argv.mode === 'production') {
    config.output.filename = '[contenthash].js';
    config.plugins.push
      (new MiniCssExtractPlugin({ filename: '[contenthash].css' }));
    config.module.rules[0].use[0] = MiniCssExtractPlugin.loader;
    config.optimization = { splitChunks: { chunks: 'all' } };
  }
  return config;
};
