<template>
  <div>
    <Navbar />
    <b-container fluid="lg">
      <b-col col="12" md="12" sm="12"
        >Favorite & Promo > Cold Brew > Edit product</b-col
      >
      <b-container class="product_detail">
        <b-row>
          <div class="col-lg-6 menu-view text-center">
            <div class="image-view">
              <img
                src="https://acegif.com/wp-content/uploads/spaghetti.gif"
                class="rounded-circle"
              />
            </div>
            <div class="price-detail mt-3">
              <p class="menu-name">Cold Brew</p>
              <p class="price">IDR. 30.000</p>
            </div>
            <div class="button-order">
              <button class="add-cart mt-3">Add To Cart</button><br />
              <button class="ask-staff mt-3">Ask a Staff</button>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="menu-detail">
              <div class="detail-text">
                <p>Delivery only on Monday to friday at 1 - 7 pm</p>
                <p>
                  Cold brewing is a method of brewing that combines ground
                  coffee and cool water and uses time instead of heat to extract
                  the flavor. It is brewed in small batches and steeped for as
                  long as 48 hours.
                </p>
              </div>
              <div class="product-size mt-5 text-center">
                Choose a Size
                <div class="row">
                  <div class="button-size">
                    <button class="size">R</button>
                    <button class="size">L</button>
                    <button class="size">XL</button>
                  </div>
                </div>
                <div class="container-choice-1">
                  <div class="title-method mb-4">Choose Delivery Methods</div>
                  <div class="method-choice-1 mt-3 mb-3">
                    <button class="method-buttom-1">Dine in</button>
                    <button class="method-buttom-1">Door Delivery</button>
                    <button class="method-buttom-1">XL</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b-row>
      </b-container>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
import axios from 'axios'
export default {
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      product: {},
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
    console.log(this.$route.params.id)
    this.getProduct(this.$route.params.id)
  },
  methods: {
    getProduct(productId) {
      axios
        .get(`http://localhost:3000/product/${productId}`)
        .then(response => {
          this.product = response.data.data[0]
          this.form = {
            category_id: response.data.data[0].category_id,
            product_name: response.data.data[0].product_name,
            product_price: response.data.data[0].product_price,
            product_size: response.data.data[0].product_size,
            product_list: response.data.data[0].product_list,
            product_status: response.data.data[0].product_status
          }
          console.log(this.product)
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
    deleteProduct(productId) {
      console.log(productId)
      axios
        .delete(`http://localhost:3000/product/${productId}`)
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
    setProduct(data) {
      console.log(data)
      this.form = data
      this.product_id = data.product_id
    },
    //redirect ke product
    pacthProduct() {
      axios
        .patch(
          `http://localhost:3000/product/${this.$route.params.id}`,
          this.form
        )
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error.response)
        })
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
.body-bg {
  background-color: #efecec;
}
.main {
  width: auto;
  background-color: grey;
}

.menu-detail {
  height: 70%;
  width: 70%;
  margin-bottom: 15%;
  background-color: white;
  padding: 2% 40px 0% 40px;
  justify-content: center;
  border-radius: 5%;
}

.content1-p {
  padding-top: 30px;
}

.image-view {
  padding: 0% 80px 0% 80px;
}

.detail-text {
  margin: 5%;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 138.84%;
  /* or 35px */

  letter-spacing: 0.02em;

  color: #6a4029;
}

.price-detail {
  width: auto;
  height: 20%;
  font-family: serif;
}

.menu-name {
  font-size: 3rem;
  font-weight: bold;
}

.price {
  font-size: 2rem;
}

.button-order {
  padding: 20px;
}
.add-cart,
.ask-staff {
  border-radius: 10px;
  border: none;
  width: 80%;
  height: 70px;
}

.add-cart {
  background-color: #6a4029;
  color: #fff;
  width: 50%;
}

.ask-staff {
  background-color: #ffba33;
  color: #fff;
  width: 50%;
}

.product-size {
  padding: 5px;
  width: auto;
  height: 20%;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 37px;
  text-align: center;
}

.button-size {
  flex: 100ch;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 50px;
}

.size {
  background: #ffba33;
  height: 150%;
  width: 20%;
  border-radius: 100%;
  text-shadow: 0;
  font-weight: bold;
}

.container-choice-1 {
  margin-top: 5%;
}

.method-choice-1 {
  justify-content: space-evenly;
}
.method-buttom-1 {
  margin: 2%;
  background: #f4f4f8;
  border: 10px;
  border-radius: 10px;
}

.box1-2-3 {
  display: flex;
  justify-content: space-evenly;
  margin-left: 20%;
  margin-right: 20%;
  background-color: white;
  height: 300%;
}

.box-1 {
  background-color: white;
}

.checkout-box {
  justify-content: space-evenly;
  height: 50%;
}

.img-checkout {
  position: absolute;
  left: -10.25%;
  right: -10.39%;
  top: -17.5%;
  bottom: -7.29%;
}

.one {
  position: relative;
}

.container-checkbox {
  margin-left: 20%;
  padding: 2%;
  position: relative;
  height: 50%;
  width: 50%;
  background-color: white;
  border-radius: 2%;
}

span {
  cursor: pointer;
}
.minus,
.plus {
  width: 50px;
  height: 50px;
  background: #ffba33;
  border-radius: 100px;
  border: 1px solid #ddd;
  display: inline-block;
  text-align: center;
  font-weight: bold;
}
input {
  height: 34px;
  width: 70px;
  text-align: center;
  font-size: 50px;
  border: 1px solid #ddd;
  border-radius: 4px;
  display: inline-block;
  vertical-align: middle;
}

.title-method {
  font-size: 20px;
}

.First-name {
  font-family: 'Times New Roman', Times, serif;
  font-weight: unset;
  font-size: medium;
}

.name {
  width: 80%;
  border: 0;
  border-bottom: #6a4029;
}
.title-product-box {
  font-size: medium;
  font-weight: bold;
}
.buttom-checkout {
  text-align: center;
  background-color: #ffba33;
  font-weight: bolder;
  height: 50%;
  width: 70%;
  border-radius: 8%;
}
</style>
