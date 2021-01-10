import axios from 'axios'

export default {
  state: {
    form: {
      category_id: '',
      product_name: '',
      product_image: '',
      product_price: '',
      product_size: '',
      product_list: '',
      product_stok: '',
      product_status: ''
    },
    limit: 8,
    page: 1,
    products: [],
    totalRows: null,
    search: '',
    sort: ''
  },
  mutations: {
    setProduct(state, payload) {
      // payload =response.data
      state.products = payload.data
      state.totalRows = payload.pagination.totalData
    },
    changePage(state, payload) {
      state.page = payload
    },
    addpostProduct(state, payload) {
      const {
        category_id,
        product_name,
        product_image,
        product_price,
        product_size,
        product_list,
        product_stok,
        product_status
      } = state.form
      const data = new FormData()
      data.append('category_id', category_id)
      data.append('product_name', product_name)
      data.append('product_image', product_image)
      data.append('product_price', product_price)
      data.append('product_size', product_size)
      data.append('product_list', product_list)
      data.append('product_stok', product_stok)
      data.append('product_status', product_status)
      for (var pair of data.entries()) {
        console.log(pair[0] + ', ' + pair[1])
      }
      state.form = payload.data
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
            context.commit('addpostProduct', response.data.data)
            console.log(response.data)
            resolve(response.data.data)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    }
  },
  deleteProduct(context, payload) {
    return new Promise((resolve, reject) => {
      axios.delete(`http://localhost:300o/product/`, payload)
      console
        .log(payload, context)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          reject('Bad Request', `${error}`)
        })
    })
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
