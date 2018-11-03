/**
 * vue.config.js
 * @see {@link https://cli.vuejs.org/config/#vue-config-js}
 */
const path = require('path');

module.exports = {
  baseUrl: '/dist/',
  outputDir: 'themes/app/dist',
  filenameHashing: false,
  lintOnSave: 'error',
  indexPath: 'themes/app/templates/Page.ss',
  pages: {
    index: {
      entry: 'themes/app/src/main.js',
      template: 'themes/app/src/Page.template.html',
    },
  },
  configureWebpack: (config) => {
    /**
     * Modify the `@` alias root.
     */
    /* eslint-disable-next-line */
    config.resolve.alias['@'] = path.resolve(__dirname, 'themes/app/src');
  },
  chainWebpack: (config) => {
    /**
     * Modify the copy directory from `public` to `themes/app/assets`.
     */
    config
      .plugin('copy')
      .tap((args) => {
        /* eslint-disable-next-line */
        args[0][0].from = path.resolve(__dirname, 'themes/app/assets');
        return args;
      });
  },
};
