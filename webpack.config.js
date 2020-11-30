const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: { // always step 1: define entry point (come in)
    main: path.resolve(__dirname, './src/index.js'),
  },
  output: { // step 2: output something (get out)
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js'
  },
  plugins: [ // step 3: install general plugins for 
    new HtmlWebpackPlugin({ // compile & output a html file
      title: 'Webpack 5 Trial',
      template: path.resolve(__dirname, './src/template.html'),
      filename: 'index.html'
    }),
    new CleanWebpackPlugin(), // clean up old data and ensure nothing get left behind,
    new webpack.HotModuleReplacementPlugin(), // only update what has changed on hot reload
  ],
  module: {
    rules: [
      //  JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      // Images
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource'
      },
      // CSS, PostCSS & Sass
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './dist'), // output base folder: ./dist
    open: true,
    compress: true,
    hot: true,
    port: 5673
  },
  optimization: {
    usedExports: true, // tree shaking
  },
};

//  Thank you: https://www.taniarascia.com/how-to-use-webpack/
