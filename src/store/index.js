import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1,
  },
  getters: {
    count: function (state) {
      return state.count += 100;
    }
  },
  mutations: {
    add(state,n) {
      state.count+=n;
    },
    reduce(state) {
      state.count--;
    }
  },
  actions: {
    addAction(context){
      context.commit('add',10)
    },
    reduceAction({ commit }){
      setTimeout(() => { commit('reduce') }, 3000);
      console.log('我比reduce提前执行');
    }
  },
  modules: {
  }
})
