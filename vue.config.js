/**
 * vue.config.js
 * @see {@link https://cli.vuejs.org/config/#vue-config-js}
 */
/* eslint-disable-next-line */
const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  baseUrl: '/resources/app/client/dist/',
  outputDir: 'app/client/dist',
  filenameHashing: false,
  lintOnSave: 'error',
  pages: {
    index: {
      entry: 'app/client/src/main.js',
      template: 'app/client/html/index.html',
    },
  },
  configureWebpack: (config) => {
    /**
     * Modify the `@` alias root.
     */
    /* eslint-disable-next-line */
    config.resolve.alias['@'] = path.resolve(__dirname, 'app/client/src');

    /**
     * add header output
     */
    config.plugins.push(new HTMLWebpackPlugin({
      inject: false,
      filename: path.resolve(__dirname, 'app/templates/includes/HeadScripts.ss'),
      template: 'app/client/html/head.html',
      chunks: ['head', 'index'],
    }));

    /**
     * add body output
     */
    config.plugins.push(new HTMLWebpackPlugin({
      inject: false,
      filename: path.resolve(__dirname, 'app/templates/includes/BodyScripts.ss'),
      template: 'app/client/html/body.html',
      chunks: ['chunk-vendors', 'chunk-common', 'vendor', 'common', 'index'],
    }));
  },
  chainWebpack: (config) => {
    /**
     * Disabled inbuilt html webpack plugin.
     */
    config.plugins.delete('html');
    config.plugins.delete('preload');
    config.plugins.delete('prefetch');
  },
};
