import types from '@/store/content/types';

export default {
  fetch({ commit }) {
    commit(types.SET_CONTENT, {
      content: '',
    });
  },
};
