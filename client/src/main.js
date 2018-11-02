import Vue from 'vue';
import store from './store';
import './utilities/accessibility';
import './utilities/component-import';

Vue.config.productionTip = false;

new Vue({
  store,
}).$mount('#app');
