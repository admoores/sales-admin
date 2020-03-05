var webpack = require('webpack')
var path = require('path')

var BUILD_DIR = path.resolve(__dirname, 'client/target')
var APP_DIR = path.resolve(__dirname, 'client/src')

var config = {
  entry: [
    APP_DIR + '/App.jsx'
  ],
  output: {
    path: BUILD_DIR,
    filename: 'app.js'
  },
  externals: {
    jquery: 'jQuery'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',

        include: [
          APP_DIR
        ],

        test: /\.jsx?$/,

        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}

module.exports = config
