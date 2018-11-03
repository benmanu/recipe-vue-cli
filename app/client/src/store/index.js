import Vue from 'vue';
import Vuex from 'vuex';

import content from '@/store/content';

import state from '@/store/state';
import mutations from '@/store/mutations';
import actions from '@/store/actions';
import getters from '@/store/getters';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    content: {
      namespaced: true,
      ...content,
    },
  },
  state,
  mutations,
  actions,
  getters,
});
