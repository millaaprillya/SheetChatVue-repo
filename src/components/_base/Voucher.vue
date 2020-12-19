<template>
  <div class="voucher">
    <b-card img-src="" img-alt="Card image" img-left>
      <b-card-text>
        <img src="../../assets/voucher/voucher1.png" alt="" />
        {{ item.product }}
      </b-card-text>
    </b-card>
    <div class="terms-voucher">
      Terms and Condition
      <ul>
        1. You can only apply 1 coupon per day 2. It only for dine in 3. Buy 1
        get 1 only for new user 4. Should make member card to apply coupon
      </ul>
    </div>
    <button class="add-voucher">ADD VOUCHER</button>
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
      product_id: '',
      currentPage: '1',
      totalRows: 'null',
      limit: 8,
      page: 1
    }
  },
  created() {
    this.getVoucher()
  },
  methods: {
    getVoucher() {
      axios
        .get('http://localhost:3000/voucher')
        .then(response => {
          console.log(response)
          this.voucher = response.data
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
    },
    productAbout(product_id) {
      this.$router.push({ name: 'aboutProduct', params: { id: product_id } })
    }
  }
}
</script>

<style>
.add-voucher {
  margin-top: 110%;
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
  position: absolute;
  width: 255px;
  height: 90px;
  left: 55px;
  top: 500px;

  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;

  color: #4f5665;
}
</style>
