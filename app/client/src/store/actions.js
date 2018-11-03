export default {
  fetch({ commit }) {
    setTimeout(() => {
      commit('setContent', {
        content: 'initial',
      });
    }, 2000);
  },
};
