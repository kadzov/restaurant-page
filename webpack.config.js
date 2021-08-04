const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  resolve: {
    extensions: ['.css', '.jpg'],
  },
  context: __dirname + '/src/js',
  entry: {
    index: './index.js',
    home: './home.js',
    menu: './menu.js',
    location: './location.js'
  },
  output: {
    filename: 'js/[name].[contenthash].js',
    path: __dirname + '/dist',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.jpg$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name].[hash][ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: '../template.html',
    }),
  ],
};
