import types from '@/store/content/types';

export default {
  [types.SET_CONTENT](state, { content }) {
    Object.assign(state, {
      content,
    });
  },
};
