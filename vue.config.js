/**
 * vue.config.js
 * @see {@link https://cli.vuejs.org/config/#vue-config-js}
 */
module.exports = {
  baseUrl: '/dist/',
  outputDir: 'themes/app/dist',
  filenameHashing: false,
  lintOnSave: 'error',
  indexPath: '../templates/Page.ss',
  pages: {
    index: {
      entry: 'themes/app/src/main.js',
      template: 'themes/app/public/index.html',
    },
  },
};
