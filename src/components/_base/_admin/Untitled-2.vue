<template>
  <div class="voucher">
    <div class="centered">
      <b-card
        img-src=""
        img-alt="Card image"
        img-left
        class="card-voucher"
        v-for="(item, index) in voucher"
        :key="index"
      >
        <b-card-text>
          <img src="../../../assets/voucher/voucher1.png" alt="" />
          {{ item.voucher_name }}
        </b-card-text>
        <p>{{ item.voucher_list }}</p>
      </b-card>
      <b-card img-src="" img-alt="Card image" img-left class="card-voucher">
        <b-card-text>
          <img src="../../../assets/voucher/voucher1.png" alt="" />
          VOUCHER DESEMBER
        </b-card-text>
        <p>Desember Ceria , ayo beli makanan max 50 %</p>
      </b-card>
      <b-card img-src="" img-alt="Card image" img-left class="card-voucher">
        <b-card-text>
          <img src="../../../assets/voucher/voucher1.png" alt="" />
          VOUCHER DESEMBER
        </b-card-text>
        <p>Desember Ceria , ayo beli makanan max 50 %</p>
      </b-card>
      <b-card img-src="" img-alt="Card image" img-left>
        <b-card-text>
          <img
            src="../../../assets/voucher/voucher1.png"
            alt=""
            class="card-voucher"
          />
          VOUCHER DESEMBER
        </b-card-text>
        <p>Desember Ceria , ayo beli makanan max 50 %</p>
      </b-card>
      <div class="terms-voucher">
        Terms and Condition
        <ul>
          1. You can only apply 1 coupon per day 2. It only for dine in 3. Buy 1
          get 1 only for new user 4. Should make member card to apply coupon
        </ul>
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
