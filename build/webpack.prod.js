const common = require('./webpack.base');
const merge = require('webpack-merge');
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = merge.smart(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: './js/[name].[contenthash].js'
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          {
            loader: 'image-webpack-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
})
