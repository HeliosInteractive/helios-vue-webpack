import Vue from 'vue';
import Vuex from 'vuex';
import { name, version } from '../../package.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    version: `${name}@${version}`,
    config: {},
  },
  getters: {},
  mutations: {
    config(state, config) { state.config = config; },
  },
  actions: {},
});
