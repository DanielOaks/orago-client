import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    welcomed: false,
  },
  mutations: {
    welcomed(state) {
      state.welcomed = true;
    },
  },
  actions: {},
  modules: {},
  getters: {
    isWelcomed: (state) => {
      return state.welcomed;
    },
  },
});
