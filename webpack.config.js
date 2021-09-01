const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  mode: 'development',
  entry: './src/index.ts',
  output: { filename: '[name].js', clean: true },
  devServer: { hot: true },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new MiniCssExtractPlugin({ filename: '[contenthash].css' })
  ],
  module: {
    rules: [
      { test: /\.jpg/, type: 'asset/resource' },
      { test: /\.scss/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.ts/, use: 'ts-loader' }
    ]
  }
};

module.exports = env => {
  if (env.production) {
    config.mode = 'production';
    config.output.filename = '[contenthash].js';
    config.optimization = { splitChunks: { chunks: 'all' } };
    config.module.rules[1].use[0] = MiniCssExtractPlugin.loader;
  }
  return config
};
