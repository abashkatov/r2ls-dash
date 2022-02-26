module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "@/assets/scss/variables.scss";',
      },
    },
  },

  transpileDependencies: [
    'vuetify'
  ]
}
