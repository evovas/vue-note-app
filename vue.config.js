module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/demo/c/vue-pro/crm'
    : '/',
  assetsDir: 'assets',
  filenameHashing: true,
  productionSourceMap: false,
}
