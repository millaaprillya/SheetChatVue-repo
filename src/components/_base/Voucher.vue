<template>
  <div class="voucher">
    <div class="coupon">
      <div class="containerr">
        <h3>VOUCHER</h3>
      </div>
      <img
        src="https://media0.giphy.com/media/3o7TKBTR9Lu1qqCGg8/giphy.gif"
        alt="Avatar"
        style="width:100%;"
      />
      <div class="container" style="background-color:white">
        <h2><b>20% OFF YOUR PURCHASE</b></h2>
        <p>
          Lorem ipsum dolor sit amet, et nam pertinax gloriatur. Sea te minim
          soleat senserit, ex quo luptatum tacimates voluptatum, salutandi
          delicatissimi eam ea. In sed nullam laboramus appellantur, mei ei
          omnis dolorem mnesarchum.
        </p>
      </div>
      <div class="container">
        <p>Use Promo Code: <span class="promo">BOH232</span></p>
        <p class="expire">Expires: Jan 03, 2021</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  computed: {
    rows() {
      return this.totalRows
    }
  },
  data() {
    return {
      voucher: [],
      form: {
        voucher_name: '',
        voucher_list: '',
        voucher_status: ''
      },
      alert: false,
      isMsg: '',
      voucher_id: '',
      currentPage: '1',
      totalRows: 'null',
      limit: 8,
      page: 1
    }
  },
  created() {
    this.getVoucher()
    console.log(this.getVoucher)
  },
  methods: {
    getVoucher() {
      axios
        .get('http://localhost:3000/voucher')
        .then(response => {
          console.log(response)
          this.voucher = response.data.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    postProduct() {
      console.log(this.form)
      axios
        .post('http://localhost:3000/voucher', this.form)
        .then(response => {
          console.log(response)
          this.alert = true
          this.isMsg = response.data.msg
          this.postVoucher()
        })
        .catch(error => {
          console.log(error.response)
        })
    },
    //  pr
    deleteVoucher(voucher_id) {
      console.log(voucher_id)
    },
    setProduct(data) {
      console.log(data)

      this.form = data
      this.voucher_id = data.voucher_id
    },
    pacthProduct() {
      console.log(this.form)
    },
    handlePageChange(numberPage) {
      console.log(numberPage)
      this.page = numberPage
      this.getProduct()
    },
    productAbout(voucher_id) {
      this.$router.push({ name: 'aboutProduct', params: { id: voucher_id } })
    }
  }
}
</script>

<style>
.body {
  font-family: Arial;
}

.coupon {
  border: 5px dotted #bbb;
  width: 80%;
  border-radius: 15px;
  margin: 0 auto;
  max-width: 600px;
}

.containerr {
  padding: 2px 16px;
  background-color: #f1f1f1;
}

.promo {
  background: #ccc;
  padding: 3px;
}

.expire {
  color: red;
}
.centered {
  text-align: center;
  border-radius: 100px;
}
.card-voucher {
  margin-bottom: 5%;
}
.add-voucher {
  margin-top: 40%;
  width: 300px;
  height: 70px;
  left: 156px;
  top: 1110px;
  border-radius: 20px;
  background: #ffba33;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height, or 120% */

  text-align: center;

  color: #6a4029;
}
.terms-voucher {
  margin-top: 20%;
  margin-bottom: 20%;
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;

  color: #4f5665;
}
</style>
