const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: __dirname + '/dist',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/pages/index.html',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/news.html',
      filename: 'news.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/photo.html',
      filename: 'photo.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/rozklad.html',
      filename: 'rozklad.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/assets/images', to: 'assets/images',
        },
      ]
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  devServer: {
    static: {
      directory: __dirname + '/dist',
    },
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
    ]
  },
};
