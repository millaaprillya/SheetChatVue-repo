<template>
  <div class="home">
    <!-- <b-container class="centered"> -->
    <b-container>
      <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
      <Navbar />
      <b-card>
        <h5>Interpolation</h5>
        <p>My name is {{ name }}</p>
      </b-card>
      <b-card>
        <h5>Computed</h5>
        <p>Original Message : {{ message }}</p>
        <p>Reverse message : {{ reverseMessage }}</p>
      </b-card>
      <b-card>
        <h5>Directiv</h5>
      </b-card>
      <ul>
        <!-- <li v-for="(item,index) in dataProduct" :key="index">{{index}} - {{items.product_name}}</li>
       <h5>{{item.product_name}}</h5>
       <h3>{{item.product_price}}</h3> -->
      </ul>
      <b-card>
        <h6>V-on</h6>
        <button v-on:click="boom()">Click Me !</button>
        <input type="text" v-model="seacrhData" v-on:keyup.enter="seacrh()" />
        <h6>v_bind</h6>
        <a v-blind:href="rule === 1 ? urlGoogle : urlYoutube">Clink google</a>
      </b-card>
      <b-card>
        <h4>communication</h4>
        <!-- <formInput
          :dataProductName="product_name"
          @changeProductName="product_name = $event"
        /> -->
        <formInput
          :dataProductName="product_name"
          @changeProductName="product_name = $event"
        />
        <!-- <input type="text" v-model="product_name" /> -->
        <br />
        <label>{{ product_name }}</label>
      </b-card>
    </b-container>
  </div>
</template>

<script>
// [1] step pertama import komponen
import Navbar from '../components/_base/Navbar'
import formInput from '../components/_base/fromInput'
export default {
  name: 'Home',
  // [2] step 2 mendaftarkan komponen yang sudah kita import
  components: {
    Navbar,
    formInput
  },
  data() {
    return {
      name: ' : Milla Aprillya Indriani',
      message: 'Hello World',
      rule: 2,
      seacrhData: '',
      dataProduct: [
        {
          product_name: 'Meja',
          product_price: '5000'
        },
        {
          product_name: 'buku',
          product_price: '5000'
        }
      ],
      urlGoogle: 'http://google.com',
      urlYoutube: 'http://youtube.com',
      product_name: 'spa'
    }
  },
  computed: {
    reverseMessage: function() {
      return this.message
        .split(' ')
        .reverse()
        .join(' ')
    }
  },
  methods: {
    boom() {
      console.log('Boom !')
      alert('Boom !')
    }
  },
  seacrh() {
    console.log('Process Seacrh')
    console.log(this.seacrhData)
  },
  changeNameProduct(event) {
    this.product_name = event
  }
}
</script>

<style scoped>
.centered {
  text-align: center;
}
</style>
