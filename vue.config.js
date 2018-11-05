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

// dir variables
const themeDir = 'themes/app';
const srcDir = `${themeDir}/src`;
const distDir = `${themeDir}/dist`;
const htmlDir = `${themeDir}/html`;
const assetsDir = `${themeDir}/assets`;
const templatesDir = `${themeDir}/templates`;

module.exports = {
  baseUrl: `/resources/${distDir}/`,
  outputDir: distDir,
  filenameHashing: false,
  lintOnSave: 'error',
  runtimeCompiler: true,
  pages: {
    index: {
      entry: `${srcDir}/main.js`,
      template: `${htmlDir}/index.html`,
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
      '@': path.resolve(__dirname, srcDir),
    });

    /**
     * add header output
     */
    config.plugins.push(new HTMLWebpackPlugin({
      inject: false,
      filename: path.resolve(__dirname, `${templatesDir}/Includes/HeadScripts.ss`),
      template: `${htmlDir}/head.html`,
      chunks: ['head', 'index'],
    }));

    /**
     * add body output
     */
    config.plugins.push(new HTMLWebpackPlugin({
      inject: false,
      filename: path.resolve(__dirname, `${templatesDir}/Includes/BodyScripts.ss`),
      template: `${htmlDir}/body.html`,
      chunks: ['chunk-vendors', 'chunk-common', 'vendor', 'common', 'index'],
    }));

    /**
     * add assets copy
     */
    config.plugins.push(new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, `${assetsDir}`),
        to: path.resolve(__dirname, `${distDir}/assets`),
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
