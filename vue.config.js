/**
 * vue.config.js
 * @see {@link https://cli.vuejs.org/config/#vue-config-js}
 */
const path = require('path');

module.exports = {
  baseUrl: '/resources/app/client/dist/',
  outputDir: 'app/client/dist',
  filenameHashing: false,
  lintOnSave: 'error',
  pages: {
    index: {
      entry: 'app/client/src/main.js',
      template: 'app/client/assets/index.html',
    },
  },
  configureWebpack: (config) => {
    /**
     * Modify the `@` alias root.
     */
    /* eslint-disable-next-line */
    config.resolve.alias['@'] = path.resolve(__dirname, 'app/client/src');
  },
  chainWebpack: (config) => {
    /**
     * Modify the copy directory from `public` to `app/client/assets`.
     */
    config
      .plugin('copy')
      .tap((args) => {
        /* eslint-disable-next-line */
        args[0][0].from = path.resolve(__dirname, 'app/client/assets');
        return args;
      });
  },
};
