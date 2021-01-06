<template>
  <div>
    <b-container fluid class="bg-user">
      <b-col class="txt-user-profile"> <p>USER PROFILE</p></b-col>
      <b-container class="card">
        <b-row>
          <b-col>
            <div class="colum-user-1 ">
              <div class="image-view-user">
                <center>
                  <img
                    src="../../../assets/property/Ellipse 211.png"
                    class="rounded-circle"
                  />
                </center>
              </div>
              <div class="button-set-profile">
                <button class="take-picture ">Take a picture</button><br />
                <button type="file" class="cancel-user ">
                  Select From Galery
                </button>

                <p class="title-doyouwanna ">
                  Delivery Hour :
                </p>
                <b-dropdown
                  size="lg"
                  split
                  text="Select start hour"
                  class="m-2"
                  variant="outline-secondary"
                >
                  <b-dropdown-item-button
                    >Select start hour</b-dropdown-item-button
                  >
                  <b-dropdown-item-button
                    >Another action</b-dropdown-item-button
                  >
                  <b-dropdown-item-button
                    >Something else here...</b-dropdown-item-button
                  >
                </b-dropdown>
                <b-dropdown
                  size="lg"
                  split
                  text="Select end hour"
                  class="m-2"
                  variant="outline-secondary"
                >
                  <b-dropdown-item-button
                    >Select start hour</b-dropdown-item-button
                  >
                  <b-dropdown-item-button
                    >Another action</b-dropdown-item-button
                  >
                  <b-dropdown-item-button
                    >Something else here...</b-dropdown-item-button
                  >
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
                  <b-dropdown-item-button
                    >Select start hour</b-dropdown-item-button
                  >
                  <b-dropdown-item-button
                    >Another action</b-dropdown-item-button
                  >
                  <b-dropdown-item-button
                    >Something else here...</b-dropdown-item-button
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
                <input type="text" /><br />
                <label for="fname" class="contact-1">Price:</label><br />
                <input type="number" /><br /><br />

                <p class="contact">Details</p>
                <label for="fname" class="contact-1">Description :</label><br />
                <input type="text" /><br />
                <label for="lname" class="contact-1">Input Product Size :</label
                ><br />
                <p>Click size you want to use for this product</p>
                <br />
                <b-button squared variant="warning" class="type">L</b-button>
                <b-button squared variant="warning" class="type">M</b-button>
                <b-button squared variant="warning" class="type">S</b-button>

                <b-button outline-secondary class="type">250gr</b-button>
                <b-button outline-secondary class="type">300gr</b-button>
                <b-button outline-secondary class="type">500gr</b-button>
                <br />
                <br />
                <label for="lname" class="contact-1"
                  >Input delivery methods :</label
                >
                <p>Click delivery you want to use for this product</p>
                <b-button squared variant="warning" class="type-delivery"
                  >Home Delivery</b-button
                >
                <b-button squared variant="warning" class="type-delivery"
                  >Dine in</b-button
                >
                <b-button squared variant="warning" class="type-delivery"
                  >Take away</b-button
                >
                <br />
                <br />
                <button tye="" class="save-product">
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
        product_image: '',
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
      const {
        product_name,
        product_image,
        product_price,
        product_size,
        product_list,
        product_status
      } = this.form
      const data = new FormData()

      data.append('product_name', product_name)
      data.append('product_image', product_image)
      data.append('product_price', product_price)
      data.append('product_size', product_size)
      data.append('product_list', product_list)
      data.append('product_status', product_status)
      for (var pair of data.entries()) {
        console.log(pair[0] + ', ' + pair[1])
      }

      // axios
      //   .post('http://localhost:3000/product', this.form)
      //   .then(response => {
      //     console.log(response)
      //     this.alert = true
      //     this.isMsg = response.data.msg
      //     this.getProduct()
      //   })
      //   .catch(error => {
      //     console.log(error.response)
      //   })
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
  },
  handleFile(event) {
    console.log(event)
    this.form.product_image = event.target.file.index[0]
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
