import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './modules/auth'
import Product from './modules/product'
import Voucher from './modules/voucher'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: { Auth, Product, Voucher },
  state: {
    name: 'Milla aprillya indriyani'
  },
  mutations: {},
  actions: {},
  getters: {},
  plugins: [
    createPersistedState({
      paths: ['Auth.user']
    })
  ]
})
