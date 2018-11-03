import types from '@/store/types';

export default {
  [types.OPEN_MAIN_NAV](state) {
    Object.assign(state, {
      isMainNavOpen: true,
    });
  },
  [types.CLOSE_MAIN_NAV](state) {
    Object.assign(state, {
      isMainNavOpen: false,
    });
  },
};
