import Vue from 'vue';

/**
 * @see {@link https://github.com/vue-a11y/vue-axe}
 */
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line
  const VueAxe = require('vue-axe');
  Vue.use(VueAxe, { config: {} });
}
