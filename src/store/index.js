import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './modules/auth'
import Profile from './modules/profile'
import Friends from './modules/friends'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: { Auth, Profile, Friends },
  state: {
    name: 'Milla aprillya indriyani'
  },
  mutations: {},
  actions: {},
  getters: {},
  plugins: [
    createPersistedState({
      paths: ['Auth.user', 'friends']
    })
  ]
})
