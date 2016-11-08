var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: './src/index.js',
  output: { path: __dirname + '/src', filename: 'bundle.js' },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader'
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      },
      {
        test: /\.svg$/,
        loader: 'babel?presets[]=es2015,presets[]=react!svg-react'
      }
    ]
  },
};