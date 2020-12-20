const webpack = require("webpack");
const { merge } = require("webpack-merge");

const commonConfig = require("./common.config");

const devConfig = {
  mode: 'production',
  devtool: 'none',
  output: {
    publicPath: './'
  }
};

module.exports = merge(commonConfig, devConfig);