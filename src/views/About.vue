<template>
  <div class="card">
    <Navbar />
    <b-container fluid="lg" class="product_detail_title">
      <b-col col="12">Favorite & Promo > Cold Brew > Edit product</b-col>
      <b-container class="product_detail">
        <b-row>
          <b-col class="detail-gambar">
            <img
              src="https://pa1.narvii.com/6527/d792d579137d9e2c410ff849152fb9c4542431d2_hq.gif"
              width="500"
              height="500"
              alt="..."
            />
            <b-col col="12" class="Delivery-title"
              >Delivery only on Monday to friday at 1 - 7 pm</b-col
            >
          </b-col>
          <b-col class="detail-listProduct">
            <ul>
              <p>
                <input
                  placeholder="Product Name"
                  type="text"
                  class="text-product-name"
                  v-model="form.product_name"
                />
              </p>
              <p>
                <input
                  placeholder="Rp :"
                  type="number"
                  class="text-product-price"
                  v-model="form.product_price"
                />
              </p>
              <p>
                <input
                  placeholder="Info "
                  type="text"
                  class="text-product-list"
                  v-model="form.product_list"
                />
              </p>

              <div class="dropdown">
                <button class="dropbtn">SELECT SIZE</button>
                <div class="dropdown-content">
                  <a>LG</a>
                  <a>SM</a>
                  <a>SM</a>
                </div>
              </div>
              <div class="dropdown">
                <button class="dropbtn">SELECT DELIVERY METHOD</button>
                <div class="dropdown-content">
                  <a>1</a>
                  <a>2</a>
                  <a>3</a>
                </div>
              </div>
              <div class="add-cart-1">
                <button class="add-cart">
                  ADD CART
                </button>
              </div>
              <div class="add-cart-1">
                <button class="add-cart">
                  SAVE CHANGES
                </button>
              </div>
            </ul>
          </b-col>
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
      product: [],
      form: {
        category_id: '',
        product_name: '',
        product_price: '',
        product_size: '',
        product_list: '',
        product_status: ''
      }
    }
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
<style>
.product_detail {
  margin-top: 5%;
}
.detail-gambar {
  width: 523px;
  height: 790px;
}
input {
  outline: 0;
  width: 100%;
  padding-top: 5%;
  border-width: 0 0 2px;
  border-color: black;
}
input:focus {
  border-color: grey;
}
.text-product-name {
  font-size: x-large;

  font-family: Poppins;
  font-style: normal;
  font-weight: 900;
  font-size: 65px;
  line-height: 97px;

  color: #000000;
}
.text-product-price {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 60px;
}
.text-product-list {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 138.84%;
  /* or 35px */

  letter-spacing: 0.03em;

  color: #000000;
}
.dropbtn {
  background-color: white;
  color: #9f9f9f;
  padding: 16px;

  font-size: 16px;
  border: #9f9f9f;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: white;
}
.Delivery-title {
  padding: 20%;
  text-align: center;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 138.84%;
  /* or 35px */

  letter-spacing: 0.02em;

  color: #000000;
}
.add-cart-1 {
  padding: 2%;
}
.add-cart {
  background-color: pink;
  width: 500px;
  height: 50px;
  border-radius: 15px;
  background: #ffba33;
}
</style>
