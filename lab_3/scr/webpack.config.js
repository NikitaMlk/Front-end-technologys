const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  entry: '/index.js',
  output: {
    filename: 'main.js',
    path: __dirname + '/dist',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './pages/index.html',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './pages/news.html',
      filename: 'news.html',
    }),
    new HtmlWebpackPlugin({
      template: './pages/photo.html',
      filename: 'photo.html',
    }),
    new HtmlWebpackPlugin({
      template: './pages/rozklad.html',
      filename: 'rozklad.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'assets/images', to: 'assets/images',
        },
      ]
    })
  ],
  devServer: {
    static: {
      directory: __dirname + '/dist',
    },
    port: 3000,
  },
};
