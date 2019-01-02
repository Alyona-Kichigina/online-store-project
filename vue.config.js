module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: { '^/api': '' }
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/scss/variables.scss";'
      }
    }
  }
}
