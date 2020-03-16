import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    count:1,
    mes:""
  },
  getters:{
    double: state =>state.count*2,
    triple: state =>state.count*3,
    mes: state => state.mes
  },
  mutations:{
    increment(state,number){
      state.count += number
    },
    decrement(state,number){
      state.count -= number
    },
    updateMes(state,value){
      state.mes = value
    }
    // 変化を与えるモジュールたちの集合
    // 自作モジュール的な
    // ここからそれぞれに使用するものを指定する
  },
  actions:{
    Increment({commit},number){
      commit("increment",number);
    },
    Decrement({commit},number){
      commit("decrement",number);
    },
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
  }
});
