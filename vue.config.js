const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const vueConfig = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
  },
  devServer: {
    // development server port 8000
    port: 8001,
    // If you want to turn on the proxy, please remove the mockjs /src/main.jsL11
    proxy: {
      '/': {
        target: 'http://127.0.0.1:8000',
        ws: false,
        changeOrigin: true
      }
    }
  },
}
module.exports = vueConfig
