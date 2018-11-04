import Vue from 'vue';
import store from './store';
import '@/components';
import '@/utilities/accessibility';
import '@/utilities/global-elements-import';

Vue.config.productionTip = false;

Vue.component('v-app', () => import('./App'));

new Vue({
  store,
}).$mount('#app');
