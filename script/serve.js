const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../webpack/dev.config.js');
const path = require('path')

//start app
const app = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  inline: true,
  historyApiFallback: true,
  disableHostCheck: true
});

app.listen(9090);
