import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'


Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user
  },
  getters,
  state,
  mutations,
  actions
})

export default store
