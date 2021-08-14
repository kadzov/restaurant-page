const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'scripts/[name].[contenthash].js',
    assetModuleFilename: 'assets/[name].[hash][ext]'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-env'] }
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'styles/[name].[contenthash].css' })
  ],
  optimization: { splitChunks: { chunks: 'all' } }
});
