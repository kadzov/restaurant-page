const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = env => ({
  mode: env.production ? 'production' : 'development',
  entry: './src/index.ts',
  output: {
    filename: env.production ? '[contenthash].js' : '[name].js',
    clean: true
  },
  devServer: { hot: true },
  optimization: env.production ? { splitChunks: { chunks: 'all' } } : {},
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new MiniCssExtractPlugin({ filename: '[contenthash].css' })
  ],
  module: {
    rules: [
      { test: /\.jpg/, type: 'asset/resource' },
      { test: /\.ts/, use: 'ts-loader' },
      {
        test: /\.scss/,
        use: [
          env.production
            ? MiniCssExtractPlugin.loader
            : 'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
});
