const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

// NOTE: common[0]: client, common[1]: server
module.exports = [
  merge(
    common[0], {
      mode: 'production',
      devtool: false,
    }
  ),
  merge(
    common[1], {
      devtool: false,
    }
  )
];
