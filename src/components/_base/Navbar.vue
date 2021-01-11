<template>
  <b-container fluid class="bv-example-row">
    <b-col lg="12" class="navbar-top">... </b-col>
    <b-row class="nav-admin">
      <b-col xl="2" lg="4" md="12" sm="12" class="CoffeShop">
        <img src="../../assets/logo.png" alt="" /> CoffeShopKu</b-col
      >
      <b-col xl="6" lg="4" md="12" sm="12">
        <ul class="header-menu">
          <li sm="12"><router-link to="/">Home</router-link></li>
          <li sm="12"><router-link to="/product">Product</router-link></li>
          <li sm="12">Cart</li>
          <li sm="12">History</li>
        </ul></b-col
      >
      <b-col xl="2" lg="4" md="12" sm="12" class="sc"> </b-col>
      <b-col xl="2" lg="12" md="12" sm="12" class="user">
        <b-container class="bv-example-row">
          <b-row>
            <b-col>
              <img src="../../assets/property/chat (1) 1.png" alt=""
            /></b-col>
            <b-col>
              <img
                mr="5"
                src="../../assets/nav/user.png"
                alt=""
                class="rounded-circle"
            /></b-col>
            <b-col>
              <img
                src="../../assets/property/logout.png"
                alt=""
                @click="handleLogout"
            /></b-col>
          </b-row>
        </b-container>
      </b-col>
    </b-row>
  </b-container>
</template>

<style>
.navbar-top {
  background: url('../../assets/nav/Capture.png');
}
.nav-admin {
  padding: 20px 20px;

  box-sizing: border-box;
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
