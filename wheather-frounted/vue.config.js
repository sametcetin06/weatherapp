var path = require('path');

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  runtimeCompiler: true,
  devServer: {
    disableHostCheck: true,
    watchOptions: {
      poll: true
    }
  },
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        'app-stores': path.resolve(__dirname, 'src/stores'),
        'app-services': path.resolve(__dirname, 'src/services'),
        'app-config': path.resolve(__dirname, 'src/config'),
      }
    }
  }
}
