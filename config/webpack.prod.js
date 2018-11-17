/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');
/* eslint-enable import/no-extraneous-dependencies */
const { resolve } = require('path');

const base = require('./webpack.base');

module.exports = merge(base, {
  entry: resolve(__dirname, '..', 'src', 'index.js'),

  output: {
    path: resolve(__dirname, '..', 'dist'),
    filename: 'xstyles.common.js',
    chunkFilename: '[id].js',
    libraryTarget: 'commonjs2',
  },
});
