'use strict';
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  context: __dirname + "/src",
  entry: "./init/main.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
  },
  module: {
    loaders: [

      { test: /\.(jsx|js)$/, exclude: /(node_modules|bower_components|public)/, loaders: ['react-hot']},
    	{ test: /\.(jsx|js)$/, exclude: /(node_modules|bower_components|public)/, loader: 'babel', query: {presets: ['es2015', 'react'], plugins: ['transform-runtime', 'transform-decorators-legacy', 'transform-class-properties'],}},
      { test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap') },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap!postcss-loader') },
      { test: /\.(png|gif|jpg)$/, loader: 'url?limit=8192' },
      { test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=10000&minetype=application/font-woff2' },
      { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=10000&minetype=application/font-woff' },
      { test: /\.(ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file' },
    ],

  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './init/index.html'
    }),
    new ExtractTextPlugin('style.css', {
      hash: true,
       allChunks: true
   })
  ],
   eslint: {
    //reporter: require("eslint-friendly-formatter"),
    quiet: true,
    failOnError: false,
    failOnWarning: false,
    emitError: false,
    emitWarning: false
  }
}
