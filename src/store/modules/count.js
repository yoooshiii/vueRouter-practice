const state = {
  count:2
};

const getters = {
    count:state =>state.count,
    double: state =>state.count*2,
    triple: state =>state.count*3
    // 整形
};

const mutations = {
    increment(state,number){
      state.count += number
    },
    decrement(state,number){
      state.count -= number
    }
};

const actions = {
  Increment({commit},number){
    commit("increment",number);
  },
  Decrement({commit},number){
    commit("decrement",number);
  }
};

export default{
  state,
  getters,
  mutations,
  actions
};
