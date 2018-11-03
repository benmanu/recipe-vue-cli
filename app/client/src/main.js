import Vue from 'vue';
import store from './store';
import App from '@/App.vue';
import '@/utilities/accessibility';
import '@/utilities/global-elements-import';

Vue.config.productionTip = false;

Vue.component('Header', () => import('./components/Header/Header'));
Vue.component('MainNav', () => import('./components/MainNav/MainNav'));
Vue.component('Tiles', () => import('./components/Tiles/Tiles'));

new Vue({
  store,
  render: h => h(App),
  created() {
    // Trigger the initial data fetch on application load.
    this.$store.dispatch('content/fetch');
  },
}).$mount('#app');
