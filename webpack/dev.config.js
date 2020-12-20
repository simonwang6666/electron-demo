const webpack = require("webpack");
const { merge } = require("webpack-merge");

const commonConfig = require("./common.config");

const devConfig = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    dev: ["webpack-dev-server/client?http://localhost:9090"],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};

module.exports = merge(commonConfig, devConfig);
