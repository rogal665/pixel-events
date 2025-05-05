const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  // Całkowicie usuwamy additionalData, aby uniknąć problemów z rekurencyjnym importem.
  // Importy będą dodawane ręcznie tam, gdzie są potrzebne.
  // css: {
  //   loaderOptions: {
  //     scss: {
  //       additionalData: `@import "~@/assets/styles/_variables.scss";`
  //     }
  //   }
  // },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'Pixel Events - Innowacyjne rozwiązania dla branży eventowej'
      return args
    })
  }
})
