import Vue from 'vue';
import Vuex from 'vuex';
import count from './modules/count';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    mes:""
  },
  getters,
  mutations,
  actions,
  modules:{
    count
  }
});
