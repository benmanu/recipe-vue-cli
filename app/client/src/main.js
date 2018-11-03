import Vue from 'vue';
import store from './store';
import App from '@/App.vue';
import '@/utilities/accessibility';

Vue.config.productionTip = false;

Vue.component('HelloWorld', () => import('./components/HelloWorld/HelloWorld'));
Vue.component('BaseButton', () => import('./elements/BaseButton/BaseButton'));

new Vue({
  store,
  render: h => h(App),
  created() {
    // Trigger the initial data fetch on application load.
    this.$store.dispatch('fetch');
  },
}).$mount('#app');
