import types from '@/store/nav/types';

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
