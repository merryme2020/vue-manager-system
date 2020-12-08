module.exports = {
  devServer: {
    port: 8888,
    open: true
  },
  css: {
    loaderOptions: {
      sass: {
        //引入全局文件
        data: '@import "@/assets/scss/_variable.scss";'
      }
    }
  }
}
