/**
 * vue.config.js
 * @see {@link https://cli.vuejs.org/config/#vue-config-js}
 */
module.exports = {
  baseUrl: '/client/dist/',
  outputDir: 'client/dist',
  filenameHashing: false,
  lintOnSave: 'error',
  indexPath: '../themes/app/templates/Page.ss',
  pages: {
    index: {
      entry: 'client/src/main.js',
      template: 'client/public/index.html',
    },
  },
};
