const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const config = {
  mode: 'development',
  devtool: 'inline-source-map',
}

// NOTE: common[0]: client, common[1]: server
module.exports = [merge(common[0], config), merge(common[1], config)];
