<template>
  <div>
    <Navbar />
    <b-container fluid class="bg-user">
      <b-col class="txt-user-profile"> <p>Pacthroduct</p></b-col>
      <b-container class="card">
        <b-row>
          <b-col>
            <div class="colum-user-1 ">
              <!-- <img
                :src="'http://localhost:3000/' + item.product_image"
                class="rounded-circle"
                width="125"
                height="100"
                alt="..."
              /> -->

              <div class="button-set-profile">
                <button type="file" class="cancel-user" @click="chooseFiles()">
                  Select From Galery
                </button>
                <input
                  id="fileUpdate"
                  type="file"
                  hidden
                  @change="handleFile"
                />
                <br />
                <label for="fname" class="contact-1">Category food :</label
                ><br />
                <b-dropdown
                  size="lg"
                  split
                  text="Choose Category here"
                  class="m-2"
                  variant="outline-secondary"
                >
                  <b-dropdown-item-button @click="handleCategory(1)"
                    >Coffe</b-dropdown-item-button
                  >
                  <b-dropdown-item-button @click="handleCategory(2)"
                    >Non Coffe</b-dropdown-item-button
                  >
                  <b-dropdown-item-button @click="handleCategory(3)"
                    >Food</b-dropdown-item-button
                  >
                </b-dropdown>

                <p class="title-doyouwanna ">
                  Status:
                </p>

                <b-dropdown
                  size="lg"
                  split
                  text="Product Status"
                  class="m-2"
                  variant="outline-secondary"
                >
                  <b-dropdown-item-button @click="handleStatus(1)"
                    >Active</b-dropdown-item-button
                  >
                  <b-dropdown-item-button @click="handleStatus(0)"
                    >none Active
                  </b-dropdown-item-button>
                </b-dropdown>
                <p class="title-doyouwanna ">
                  Input stock :
                </p>
                <b-dropdown
                  size="lg"
                  split
                  text="Input stock"
                  class="m-2"
                  variant="outline-secondary"
                >
                  <b-dropdown-item-button @click="handleStok(50)"
                    >50</b-dropdown-item-button
                  >
                  <b-dropdown-item-button @click="handleStok(30)"
                    >30</b-dropdown-item-button
                  >
                  <b-dropdown-item-button @click="handleStok(40)"
                    >40</b-dropdown-item-button
                  >
                </b-dropdown>
              </div>
            </div></b-col
          >
          <b-col>
            <b-container class="card-contact">
              <p></p>
              <form>
                <label for="fname" class="contact-1">Name :</label><br />
                <input type="text" v-model="form.product_name" /><br />
                <label for="fname" class="contact-1">Price:</label><br />
                <input type="number" v-model="form.product_price" /><br /><br />

                <p class="contact">Details</p>
                <label for="fname" class="contact-1">Description :</label><br />
                <input type="text" v-model="form.product_list" /><br />
                <label for="lname" class="contact-1">Input Product Size :</label
                ><br />
                <p>Click size you want to use for this product</p>
                <br />
                <b-button
                  squared
                  variant="warning"
                  @click="handleSize('L')"
                  class="type"
                  >L</b-button
                >
                <b-button
                  squared
                  variant="warning"
                  @click="handleSize('M')"
                  class="type"
                  >M</b-button
                >
                <b-button
                  squared
                  variant="warning"
                  @click="handleSize('S')"
                  class="type"
                  >S</b-button
                >

                <b-button
                  outline-secondary
                  @click="handleSize('1')"
                  class="type"
                  >250gr</b-button
                >
                <b-button
                  outline-secondary
                  @click="handleSize('2')"
                  class="type"
                  >300gr</b-button
                >
                <b-button
                  outline-secondary
                  @click="handleSize('3')"
                  class="type"
                  >500gr</b-button
                >
                <br />
                <br />

                <br />
                <br />

                <button
                  type="button"
                  class="save-product"
                  @click="setProduct(form)"
                >
                  Save Product
                </button>
              </form></b-container
            >
          </b-col>
        </b-row>
      </b-container>
      <br />
    </b-container>
    <Footer />
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions, mapGetters } from 'vuex'
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
export default {
  name: 'Product',

  components: {
    Navbar,
    Footer
  },
  computed: {
    ...mapGetters({
      products: 'getProduct'
    }),
    rows() {
      return this.totalRows
    }
  },
  data() {
    return {
      products: {},
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
    this.product_id = this.$route.params.id
    this.getproductByid(this.$route.params.id)
  },
  methods: {
    ...mapActions(['getProducts', 'patchProduct']),
    deleteProduct(product_id) {
      console.log(product_id)
    },
    getproductByid(product_id) {
      axios
        .get(`http://localhost:3000/product/${product_id}`)
        .then(response => {
          console.log(response)
          const {
            category_id,
            product_name,
            product_image,
            product_list,
            product_stok,
            product_price,
            product_size,
            product_status
          } = response.data.data[0]
          this.form = {
            category_id,
            product_name,
            product_image,
            product_list,
            product_stok,
            product_price,
            product_size,
            product_status
          }
          const data = {
            product_id: this.product_id,
            form: data
          }
          // this.patchProduct(data)
        })
        .catch(error => {
          console.log(error.response)
        })
    },

    setProduct() {
      const data = new FormData()
      data.append('category_id', this.form.category_id)
      data.append('product_name', this.form.product_name)
      data.append('product_image', this.form.product_image)
      data.append('product_list', this.form.product_list)
      data.append('product_stok', this.form.product_stok)
      data.append('product_price', this.form.product_price)
      data.append('product_size', this.form.product_size)
      data.append('product_status', this.form.product_status)
      // for (var pair of data.entries()) {
      //   console.log(pair[0] + ', ' + pair[1])
      // }
      let dataUpdate = { dataSet: this.form, id: this.product_id }
      // console.log(dataUpdate)
      this.patchProduct(dataUpdate)
        .then(() => {
          this.getProduct()
          // this.makeToast('Product Updated', 'Success', 'success')
        })
        .catch(() => {
          // this.makeToast('Failed update product', 'Error', 'danger')
        })
      this.$bvModal.hide('add-product-modal')
    },

    handlePageChange(numberPage) {
      console.log(numberPage)
      this.page = numberPage
      this.getProduct()
    },
    handleFile(event) {
      console.log(event.target.files[0])
      this.form.product_image = event.target.files[0]
    },
    handleSize(size) {
      console.log(size)
      this.form.product_size = size
    },
    handleStok(stock) {
      this.form.product_stok = stock
      console.log(stock)
    },
    handlegr() {
      // this.form.product_size
    },
    handleStatus(status) {
      this.form.product_status = status
      console.log(status)
    },
    chooseFiles() {
      document.getElementById('fileUpdate').click()
    },
    handleCategory(category) {
      console.log(category)
      this.form.category_id = category
    }
  }
}
</script>

<style scoped>
.type-delivery {
  border-radius: 100%;
  margin-left: 2%;
  height: 70px;
  width: 100px;
  color: white;
}

.type {
  border-radius: 100%;
  margin-left: 2%;
  height: 60px;
  width: 60px;
  color: white;
}
.contact-1 {
  margin-top: 2%;
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 30px;
  /* identical to box height */

  color: #6a4029;
}
.title-doyouwanna {
  margin-top: 7%;
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 30px;
  /* identical to box height */

  color: #6a4029;
}
.txt-user-profile {
  color: white;
}
.bg-user {
  background: white;
}
.card {
  background: white;
  border-radius: 20px;
}
.card-contact {
  margin-top: 5%;
  background: white;
}
.button-set-profile {
  margin-left: 8%;
}
.m-2,
.save-product,
.take-picture,
.remote-photo,
.set-password,
.save-user,
.cancel-user,
.logout {
  color: #ffffff;

  border-radius: 20px;
  width: 370px;
  height: 60px;
  text-align: center;
}
.save-product,
.set-photo,
.cancel-user {
  background: #ffba33;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 22px;
  /* identical to box height */

  text-align: center;

  color: #6a4029;
}
.remote-photo,
.save-user {
  background: #6a4029;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 22px;
}

.set-password,
.logout {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height */

  color: #6a4029;
}
.take-picture,
.colum-user-1 {
  margin-top: 5%;
}

.take-picture {
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 30px;
  /* identical to box height */

  background: #0b132a;
  border-radius: 20px;
}
.remote-photo,
.set-password,
.save-user,
.cancel-user,
.logout {
  margin-top: 5%;
}
.contact {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 37px;
  /* identical to box height */

  color: #4f5665;
}
</style>
