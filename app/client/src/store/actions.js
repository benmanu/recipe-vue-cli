import types from '@/store/types';

export default {
  toggleMainNav({ dispatch, state }) {
    if (state.isMainNavOpen) {
      dispatch('closeMainNav');
    } else {
      dispatch('openMainNav');
    }
  },
  openMainNav({ commit }) {
    commit(types.OPEN_MAIN_NAV);
  },
  closeMainNav({ commit }) {
    commit(types.CLOSE_MAIN_NAV);
  },
};
