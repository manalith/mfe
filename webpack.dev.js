"use strict";

const merge = require('webpack-merge');
const common = require('./webpack.config');
module.exports = merge(common, {
  devServer: {
    port: 8081,
    historyApiFallback: true
  }
});
