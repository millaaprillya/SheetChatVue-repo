<template>
  <b-container fluid class="bv-example-row">
    <b-row class="nav-admin">
      <b-col xl="2" lg="4" md="12" sm="12" class="CoffeShop">
        <img src="../../assets/logo.png" alt="" /> CoffeShopKu</b-col
      >
      <b-col xl="6" lg="4" md="12" sm="12">
        <ul class="header-menu">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/product">Product</router-link></li>
          <li>Your Cart</li>
          <li>History</li>
          <!-- <li><router-link to="/lifecycle">Lifecycle</router-link></li> -->
        </ul></b-col
      >
      <b-col xl="2" lg="4" md="12" sm="12">
        <form class="form-inline ">
          <input
            class="form-control "
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </b-col>
      <b-col xl="2" lg="4" md="12" sm="12">
        <img
          mr="5"
          src="../../assets/nav/user.png"
          alt=""
          class="rounded-circle"
        />
      </b-col>
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
  margin: 2%;
  padding: 20px 20px 20px 20px;

  box-sizing: border-box;
  border: opx solid;
  padding: 10px;
  box-shadow: 0px 7px 5px #f7f7f7;
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
.form-control {
  border-radius: 10%;
}
.form-inline {
  border-radius: 50%;
  border-color: yellowgreen;
}
</style>

<script>
export default {}
</script>
