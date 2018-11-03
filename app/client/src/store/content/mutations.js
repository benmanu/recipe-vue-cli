import types from '@/store/content/types';

export default {
  [types.SET_CONTENT](state, { content }) {
    state.content = content;
  },
};
