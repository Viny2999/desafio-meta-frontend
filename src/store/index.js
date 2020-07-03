import Vue from 'vue'
import Vuex from 'vuex'
import client from '../mock-api/index'

Vue.use(Vuex)

export const state = {
  users: []
} 

export const mutations = {
  setUsers (state, users) {
    state.users = users
  }
}

export const actions = {
  fetchUsers ({ commit }) {
    return client
      .fetchUsers()
      .then(users => commit('setUsers', users))
  }
}


export default new Vuex.Store({
  state,
  mutations,
  actions
})