module.exports = {
  mode: 'production',
  entry: [
    './src/index.js',
    './src/home.js',
    './src/menu.js',
    './src/location.js'
  ],
  output: {
    filename: 'main.js',
    path: __dirname + '/dist',
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
