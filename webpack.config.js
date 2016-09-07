// @flow
/* eslint-disable import/no-extraneous-dependencies, flowtype/require-parameter-type */
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const _ = require('lodash/fp');

const isProduction = process.env.NODE_ENV === 'production';
const ifProduction = (option) => (isProduction ? option : undefined);
const unlessProduction = (option) => (!isProduction ? option : undefined);

module.exports = {
  context: path.join(__dirname, 'src'),
  devtool: unlessProduction('source-map'),
  entry: {
    app: ['babel-polyfill', 'whatwg-fetch', './app.js'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: isProduction ? '[name]-[hash].js' : '[name].js',
  },
  resolve: {
    alias: { lib: path.join(__dirname, 'src', 'lib') },
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    noParse: [/\.min\.js$/],
    loaders: [
      {
        test: /\.scss$/,
        loaders: ExtractTextPlugin.extract({
          fallbackLoader: 'style',
          loader: _.compact([
            _.join('', _.compact([
              'css?',
              'modules',
              '&importLoaders=2&localIdentName=[name]__[local]__[hash:base64:5]',
              unlessProduction('&source-map'),
              ifProduction('&minimize'),
            ])),
            'sass',
            'sass-resources',
          ]),
        }),
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: { cacheDirectory: path.join(__dirname, 'tmp', 'babel-cache') },
      },
    ],
  },
  plugins: _.compact([
    new webpack.LoaderOptionsPlugin({
      minimize: isProduction,
      debug: !isProduction,
    }),
    new CopyWebpackPlugin([
      { from: path.join(__dirname, 'src', 'public'), to: '.' },
    ]),
    new ExtractTextPlugin({
      filename: isProduction ? '[name]-[contenthash].css' : '[name].css',
    }),
    new HtmlWebpackPlugin({
      title: 'Visual 4Site',
      template: 'index.ejs',
      minify: ifProduction({
        removeComments: true,
        collapseWhitespace: true,
      }),
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    ifProduction(new webpack.optimize.DedupePlugin()),
    ifProduction(new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: true,
      },
    })),
    ifProduction(new webpack.optimize.OccurrenceOrderPlugin(true)),
  ]),
  postcss: ifProduction(['autoprefixer']),
  sassResources: [path.join(__dirname, 'src', 'assets', 'sassResources', '**', '*.scss')],
};
