import axios from 'axios'

export default {
  state: {
    limit: 10,
    page: 1,
    products: [],
    totalRows: null
  },
  mutations: {
    setProduct(state, payload) {
      // payload =response.data
      state.products = payload.data
      state.totalRows = payload.pagination.totalData
    },
    changePage(state, payload) {
      state.page = payload
    }
  },
  actions: {
    getProducts(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `http://localhost:3000/product?page=${context.state.page}&limit=${context.state.limit}`
          )
          .then(response => {
            // console.log(response)
            context.commit('setProduct', response.data)
            resolve(response)
            //   state.totalRows = response.data.pagination.totalData
            //   state.product = response.data.data
          })
          .catch(error => {
            console.log(error.response)
            reject(error)
          })
      })
    },
    postProduct(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post('http://localhost:3000/product', payload)
          .then(response => {
            context.commit('setProduct', response.data.data)
            console.log(response.data)
            resolve(response.data.data)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    }
  },
  getters: {
    getPageProduct(state) {
      return state.page
    },
    getLimitProduct(state) {
      return state.limit
    },
    getDataProduct(state) {
      return state.products
    },
    getTotalRowsProduct(state) {
      return state.totalRows
    },
    getAllDataState(state) {
      return state
    }
  }
}
