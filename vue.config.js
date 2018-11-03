/**
 * vue.config.js
 * @see {@link https://cli.vuejs.org/config/#vue-config-js}
 */
/* eslint-disable-next-line */
const HTMLWebpackPlugin = require('html-webpack-plugin');
/* eslint-disable-next-line */
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const lessConfig = require('./less.config');

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
  css: {
    loaderOptions: {
      less: lessConfig,
    },
  },
  configureWebpack: (config) => {
    /**
     * Modify the `@` alias root.
     */
    Object.assign(config.resolve.alias, {
      '@': path.resolve(__dirname, 'app/client/src'),
    });

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

    /**
     * add assets copy
     */
    config.plugins.push(new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'app/client/assets'),
        to: path.resolve(__dirname, 'app/client/dist/assets'),
        toType: 'dir',
      },
    ]));
  },
  chainWebpack: (config) => {
    /**
     * disable index generation and copy plugins.
     * we have these custom defined above.
     */
    config.plugins.delete('html');
    config.plugins.delete('preload');
    config.plugins.delete('prefetch');
    config.plugins.delete('copy');
  },
};
