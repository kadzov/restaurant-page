const path = require('path');

module.exports = {
  mode: 'production',
  entry: ['./src/index.js', './src/home.js', './src/menu.js', './src/location.js',],
  // entry: {
  //   index: './src/index.js',
  //   home: './src/home.js',
  //   menu: './src/menu.js',
  //   location: './src/location.js'
  // },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
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
};
