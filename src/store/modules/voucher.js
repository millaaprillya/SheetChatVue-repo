import axios from 'axios'

export default {
  state: {
    // limit: 10,
    // page: 1,
    voucher: [],
    totalRows: null
  },
  mutations: {
    setVoucher(state, payload) {
      state.voucher = payload.data
      state.totalRows = payload.pagination.totalData
    },
    changePage(state, payload) {
      state.page = payload
    }
  },
  actions: {
    getVoucher(context) {
      return new Promise((resolve, reject) => {
        axios
          .get('http://localhost:3000/voucher')
          .then(response => {
            // console.log(response)
            context.commit('setVoucher', response.data)
            resolve(response)
            //   state.totalRows = response.data.pagination.totalData
            //   state.product = response.data.data
          })
          .catch(error => {
            // console.log(error.response)
            reject(error)
          })
      })
    }
  },
  getters: {
    // getPageProduct(state) {
    //   return state.page
    // },
    // getLimitProduct(state) {
    //   return state.limit
    // },
    getDataVoucher(state) {
      return state.voucher
    },
    // getTotalRowsProduct(state) {
    //   return state.totalRows
    // },
    getAllDataState(state) {
      return state
    }
  }
}
