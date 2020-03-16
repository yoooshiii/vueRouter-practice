const state = {
  count:1
};

const getters = {
    double: state =>state.count*2,
    triple: state =>state.count*3
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
