import axios from 'axios'

export default {
  state: {
    limit: 6,
    page: 1,
    products: [],
    totalRows: null,
    product_id: '',
    search: '',
    sort: '',
    category: ''
    // sort1: 'product_price ASC',
    // sort2: 'product_price DESC'
  },
  mutations: {
    setProduct(state, payload) {
      // angep aja ini state ini ngambil dari sini
      // payload =response.data
      state.products = payload.data // nah si payload ini nampung data dari state
      state.totalRows = payload.pagination.totalData
    },
    changePage(state, payload) {
      state.page = payload
    },
    changeSort(state, payload) {
      state.sort = payload
    },
    changeSearch(state, payload) {
      state.search = payload
    },
    changeCategory(state, payload) {
      state.category = payload
      state.products = payload.data // na
    }
  },
  actions: {
    getProducts(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `http://localhost:3000/product?page=${context.state.page}&limit=${context.state.limit}&search=${context.state.search}&sort=${context.state.sort}`
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
    getProductsAsc(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `http://localhost:3000/product?page=${context.state.page}&limit=${context.state.limit}&sort=${context.state.sort1}`
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
    addProduct(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post('http://localhost:3000/product', payload)
          .then(response => {
            console.log(response.data)
            resolve(response.data.data)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    patchProduct(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `http://localhost:3000/product'${payload.product_id}`,
            payload.form
          )
          .then(response => {
            resolve(response.data)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    productDeleted(context, payload) {
      //  context itu di ambil dari state
      return new Promise((resolve, reject) => {
        axios
          .delete(`http://localhost:3000/product/${payload.product_id}`)
          .then(response => {
            console.log(response)
            resolve(response)
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
