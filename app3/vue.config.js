// const packageName = require('./package.json').name
const port = 8003

module.exports = {
  devServer: {
    port,
    headers: {
      'Access-Control-Allow-Origin': '*' // 允许跨域
    }
  },
  configureWebpack: {
    output: {
      library: 'microApp',
      libraryTarget: 'umd'
    }
  }
}