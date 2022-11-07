
const { config } = require('@swc/core/spack')

module.exports = config({
  entry: {
    'web': '../app/index.js',
  },
  output: {
    path: __dirname + '/lib'
  },
  module: {},
});