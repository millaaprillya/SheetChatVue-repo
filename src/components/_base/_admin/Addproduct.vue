<template>
  <div class="product">
    <b-container fluid>
      <b-row class="sidebar">
        <b-col xl="8" lg="8" md="12" sm="12">
          <b-container>
            <b-container class="bv-example-row">
              <form>
                <b-alert :show="alert">{{ isMsg }}</b-alert>
                <input
                  type="text"
                  v-model="form.category_id"
                  placeholder="category ..."
                />
                <br />
                <input
                  type="text"
                  v-model="form.product_name"
                  placeholder="Product Name ..."
                />
                <br />
                <input
                  type="text"
                  v-model="form.product_price"
                  placeholder="Product Price ..."
                />
                <br />
                <input
                  type="text"
                  v-model="form.product_size"
                  placeholder="Product Size ..."
                />
                <br />
                <input
                  type="text"
                  v-model="form.product_list"
                  placeholder="Product list ..."
                />
                <br />
                <input
                  type="text"
                  v-model="form.product_status"
                  placeholder="Product status ..."
                />
                <br />
                <button type="button" @click="postProduct()">Save</button>
              </form>
            </b-container>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Product',

  components: {},
  computed: {
    rows() {
      return this.totalRows
    }
  },
  data() {
    return {
      product: [],
      form: {
        category_id: '',
        product_name: '',
        product_price: '',
        product_size: '',
        product_list: '',
        product_status: ''
      },
      alert: false,
      isMsg: '',
      product_id: '',
      currentPage: '1',
      totalRows: 'null',
      limit: 8,
      page: 1
    }
  },
  created() {
    this.getProduct()
  },
  methods: {
    getProduct() {
      axios
        .get(
          `http://localhost:3000/product?page=${this.page}&limit=${this.limit}`
        )
        .then(response => {
          console.log(response)
          this.totalRows = response.data.pagination.totalData
          this.product = response.data.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    postProduct() {
      console.log(this.form)
      axios
        .post('http://localhost:3000/product', this.form)
        .then(response => {
          console.log(response)
          this.alert = true
          this.isMsg = response.data.msg
          this.getProduct()
        })
        .catch(error => {
          console.log(error.response)
        })
    },
    //  pr
    deleteProduct(product_id) {
      console.log(product_id)
    },
    setProduct(data) {
      console.log(data)
      // console.log(this.product_id)
      // this.form = {
      //   category_id: 'data.category_id',
      //   product_name: 'data.product_name',
      //   product_price: 'data.product_price',
      //   product_size: 'data.product_size',
      //   product_list: 'product_list',
      //   product_status: 'product_status'
      // }
      this.form = data
      this.product_id = data.product_id
    },
    pacthProduct() {
      console.log(this.form)
    },
    handlePageChange(numberPage) {
      console.log(numberPage)
      this.page = numberPage
      this.getProduct()
    }
  }
}
</script>

<style scoped>
.centered {
  text-align: center;
}
.voucher {
  background-color: pink;
  width: 100%;
  height: 100px;
  margin-bottom: 30px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-weight: bold;
  border-radius: 20px;
}
.card-product {
  width: 156px;
  height: 400.5px;
  margin: 4%;
  padding: 2%;
  background: #ffffff;
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
  border-radius: 150px;
}
.card-title {
  font-family: Poppins;
  text-align: center;
  color: #000000;
  font-style: normal;
  font-size: 20px;
}
</style>
