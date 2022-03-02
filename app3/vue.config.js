const packageName = require('./package.json').name
const port = 8003

module.exports = {
  publicPath: `//localhost:${port}`,
  devServer: {
    port
  },
  configureWebpack: {
    output: {
      library: `${packageName}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${packageName}`,
    }
  }
}