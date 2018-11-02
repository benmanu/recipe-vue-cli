/**
 * vue.config.js
 * @see {@link https://cli.vuejs.org/config/#vue-config-js}
 */
module.exports = {
  baseUrl: '/',
  outputDir: 'themes/app/dist',
  filenameHashing: false,
  lintOnSave: 'error',
  indexPath: 'themes/app/templates/Page.ss',
  pages: {
    index: {
      entry: 'themes/app/src/main.js',
      template: 'themes/app/assets/Page.template.html',
    },
  },
};
