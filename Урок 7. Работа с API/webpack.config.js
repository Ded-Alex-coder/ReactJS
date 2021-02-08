const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['@babel/polyfill', path.resolve(__dirname, 'static_src', 'index.js')],
  output: {
    path: path.resolve(__dirname, 'out'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'static_src', 'index.html'),
    }),
  ],
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  devServer: {
    historyApiFallback: true,
  },
};
