import Vue from 'vue';
import Vuex from 'vuex';
import count from './modules/count';

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    mes:""
  },
  getters:{
    mes: state => state.mes
  },
  mutations:{
    updateMes(state,value){
      state.mes = value
    }
    // 変化を与えるモジュールたちの集合
    // 自作モジュール的な
    // ここからそれぞれに使用するものを指定する
  },
  actions:{
    UpdateMes({commit},value){
      commit('updateMes',value)
    }
    // .
    // .
    // .
    // .
    // 以下と同じ挙動をする
    // increment(contex,number){
    //   contex.commit("increment",number);
    //   // contex.getters
    //   // contex.dispath
    // },
    // それぞれの関数で使用する
    //
    //
  },
  modules:{
    count
  }
});
