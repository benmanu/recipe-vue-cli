import Vue from 'vue';
import App from './App.vue';
import store from './store';

/**
 * @see {@link https://github.com/vue-a11y/vue-axe}
 */
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line
  const VueAxe = require('vue-axe');
  Vue.use(VueAxe, { config: {} });
}

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
