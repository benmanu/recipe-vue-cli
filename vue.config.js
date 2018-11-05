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
  baseUrl: '/resources/themes/app/dist/',
  outputDir: 'themes/app/dist',
  filenameHashing: false,
  lintOnSave: 'error',
  runtimeCompiler: true,
  pages: {
    index: {
      entry: 'themes/app/src/main.js',
      template: 'themes/app/html/index.html',
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
      '@': path.resolve(__dirname, 'themes/app/src'),
    });

    /**
     * add header output
     */
    config.plugins.push(new HTMLWebpackPlugin({
      inject: false,
      filename: path.resolve(__dirname, 'themes/app/templates/Includes/HeadScripts.ss'),
      template: 'themes/app/html/head.html',
      chunks: ['head', 'index'],
    }));

    /**
     * add body output
     */
    config.plugins.push(new HTMLWebpackPlugin({
      inject: false,
      filename: path.resolve(__dirname, 'themes/app/templates/Includes/BodyScripts.ss'),
      template: 'themes/app/html/body.html',
      chunks: ['chunk-vendors', 'chunk-common', 'vendor', 'common', 'index'],
    }));

    /**
     * add assets copy
     */
    config.plugins.push(new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'themes/app/assets'),
        to: path.resolve(__dirname, 'themes/app/dist/assets'),
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
