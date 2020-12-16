<template>
  <b-container fluid class="bv-example-row">
    <b-row class="nav-admin">
      <b-col xl="2" lg="4" md="12" sm="12" class="CoffeShop">CoffeShopKu</b-col>
      <b-col xl="8" lg="4" md="12" sm="12">
        <ul class="header-menu">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/product">Product</router-link></li>
          <li>Your Cart</li>
          <li>History</li>
          <li><router-link to="/lifecycle">Lifecycle</router-link></li>
          <li><router-link to="/lifecycle">admin</router-link></li>
        </ul></b-col
      >
      <b-col xl="2" lg="4" md="12" sm="12">3 of 3</b-col>
    </b-row>
  </b-container>
  <!-- <div>
    <router-link to="/">Home</router-link> |
    <router-link to="/product">Product</router-link> |
    <router-link to="/lifecycle">Lifecycle</router-link>
  </div> -->
</template>

<style>
.nav-admin {
  margin: 3%;
}
.CoffeShop {
  font-family: 'Kalam', cursive;
  font-size: 160%;
  text-align: right;
}
.header-menu li {
  display: inline-block;
  padding-right: 0.9rem;
  padding-left: 0.9rem;
  font-size: larger;
  text-align: right;
  color: black;
}
</style>
