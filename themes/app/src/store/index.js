import Vue from 'vue';
import Vuex from 'vuex';

import nav from '@/store/nav';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    nav: {
      namespaced: true,
      ...nav,
    },
  },
});
