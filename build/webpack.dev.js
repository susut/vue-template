const common = require('./webpack.base');
const merge = require('webpack-merge');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: './js/[name].[hash].js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    hot: true
  }
})
