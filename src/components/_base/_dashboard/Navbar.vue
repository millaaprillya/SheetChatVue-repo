<template>
  <b-container fluid class="bv-example-row">
    <b-row class="nav-admin">
      <b-col xl="2" lg="4" md="12" sm="12" class="CoffeShop">
        <img src="../../../assets/logo.png" alt="" /> CoffeShopKu</b-col
      >
      <b-col xl="6" lg="4" md="12" sm="12">
        <ul class="header-menu">
          <li sm="12"><router-link to="/">Home</router-link></li>
          <li sm="12"><router-link to="/product">Product</router-link></li>
          <li sm="12">Your Cart</li>
          <li sm="12">History</li>
        </ul></b-col
      >
      <b-col xl="2" lg="4" md="12" sm="12" class="sc"> </b-col>
      <b-col xl="2" lg="12" md="12" sm="12" class="user">
        <button @click="handleLogout">Logout</button>
      </b-col>
    </b-row>
  </b-container>
</template>

<style>
.nav-admin {
  margin: 2%;
  padding: 20px 20px 20px 20px;

  box-sizing: border-box;
  border-left: opx solid;
  padding: 10px;
  box-shadow: 10px 10px 10px #f7f7f7;
}
.CoffeShop {
  font-family: 'Kalam', cursive;
  font-size: 160%;
}
.header-menu li {
  font-family: 'Kalam', cursive;
  display: inline-block;
  padding-right: 0.9rem;
  padding-left: 0.9rem;
  font-size: larger;
  text-align: right;
  color: black;
}
.form-control {
  border-radius: 10%;
}
.form-inline {
  border-radius: 50%;
  border-color: yellowgreen;
}
@media only screen and (max-width: 1111px) {
  .sc {
    display: none;
    flex: 1;
  }
}
</style>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Navbar',
  methods: {
    ...mapActions(['logout']),
    handleLogout() {
      console.log('anda berasil login').this.logout()
    }
  }
}
</script>
