const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    index: './src/js/index.js',
    home: './src/js/home.js',
    menu: './src/js/menu.js',
    location: './src/js/location.js'
  },
  output: {
    filename: '[name].js',
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
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/template.html',
    }),
  ],
};
